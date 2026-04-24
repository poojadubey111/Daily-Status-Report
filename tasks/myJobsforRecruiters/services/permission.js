const { where } = require("sequelize");
const { Permission, Role, RolePermission } = require("../models");

exports.createPermission = async ({ base_name, method, url, roles }) => {

  if (!base_name || !method || !url) {
    throw new Error("All fields are required");
  }

  if (!roles || roles.length === 0) {
    throw new Error("At least one role must be provided");
  }


  const existingPermission = await Permission.findOne({
    where:{
      base_name,
      method:method.toUpperCase(),
      url
    }
  });

  if(existingPermission){
    throw new Error("Permission already exists");
  }

  const permission = await Permission.create({
    base_name,
    method: method.toUpperCase(),
    url
  });


  const roleRecords = await Role.findAll({
    where: { name: roles }
  });

  if (!roleRecords.length) {
    throw new Error("Roles not found");
  }


  const mappings = roleRecords.map(role => ({
    role_id: role.id,
    permission_id: permission.id
  }));

  await RolePermission.bulkCreate(mappings);

  return permission;
};