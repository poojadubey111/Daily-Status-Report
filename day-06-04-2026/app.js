require("dotenv").config();
const express = require("express");

const { sequelize} =require("./models");

const app = express();
app.use(express.json());
app.use("/auth",require("./routes/auth.routes"));

(async ()=>{
    await sequelize.sync();
    app.listen(process.env.PORT,()=>{
        console.log("Server running...");
    });
})();