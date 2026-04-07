const express = require("express");
require("dotenv").config();

const { sequelize } = require("./models");
const app = express();
app.use(express.json());

app.use("/auth",require("./routes/auth.routes"));
app.use("/user",require("./routes/user.routes"));


(async ()=>{
    await sequelize.sync();
    app.listen(process.env.PORT,()=>{
        console.log("Server running");
    });
})();