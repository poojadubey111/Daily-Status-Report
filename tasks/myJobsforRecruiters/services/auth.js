const { User, Role } = require("../models");
const bcrypt = require('bcrypt');
const { generateToken } = require("../utils/jwt")



const validatePassword = (password) => {
    const regex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[\W]).{8,}$/;
    if (!regex.test(password)) {
        throw new Error("Password must be strong");
    }
}

const checkUserExists = async (email) => {
    const exist = await User.findOne({ where: { email } });
    if (exist) {
        throw new Error("Email already Registered");
    }
};

const getRole = async (roleName) => {
    const role = await Role.findOne({ where: { name: roleName } });
    if (!role) {
        throw new Error(`${roleName} role not found`);
    }
    return role;
}

const createUser = async ({ name, email, password, role_id }) => {
    const hashed = await bcrypt.hash(password, 10);

    return await User.create({
        name,
        email, password: hashed,
        role_id
    });
};


//Register start
exports.register = async ({ name, email, password }) => {

    if (!name || !email || !password) {
        //if not provided throw Error
        throw new Error("All feilds are required");
    }

    validatePassword(password);
    await checkUserExists(email);

    const role = await getRole("Candidate");

    return await createUser({
        name,
        email, password,
        role_id: role.id
    });



};
// Register End

//start create Admin
exports.createRecruiter = async ({ name, email, password }) => {

    if (!name || !email || !password) {

        throw new Error("All feilds are required");
    }

    validatePassword(password);
    await checkUserExists(email);

    const role = await getRole("Recruiter");

    return await createUser({
        name,
        email, password,
        role_id: role.id
    });



};
//end



// Login start

exports.login = async ({ email, password }) => {


    const user = await User.findOne({ where: { email } });
    if (!user) {
        throw new Error("User not found");
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
        throw new Error("Invalid password");
    }

    const token = generateToken(user);
    return { user, token };

}

// Login End



//reset password


