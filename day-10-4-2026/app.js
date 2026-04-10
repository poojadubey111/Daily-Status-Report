const express = require("express");
const {sequelize} = require("./models");
require("dotenv").config();
const morgan=require("morgan");

const app = express();
app.use(express.json());
app.use(morgan("tiny"));

// app.use("/auth",require("./routes/auth"));
// console.log("AUTH ROUTES =>", authRoutes);


const authRoutes = require("./routes/auth");

console.log("AUTH ROUTES LOADED:", authRoutes);

app.use("/auth", authRoutes);
app.use("/protected",require("./routes/protected"));

(async ()=>{
    // await sequelize.sync({ force: true });

    console.log("DB Connected ");
    app.listen(process.env.PORT,()=>{
        console.log("server running");
    })
})();