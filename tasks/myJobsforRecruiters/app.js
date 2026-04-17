require("dotenv").config();
const express = require('express');
const app = express();
const db = require("./models");
// const sequelize = require('./config/db');
const routes = require("./routes/role");
const authRoutes = require("./routes/auth");
const protectedRoutes = require("./routes/protected");

app.use(express.json());
app.use("/", routes);
app.use("/auth", authRoutes);
app.use("/api", protectedRoutes);




db.sequelize.sync({ alter: true })
    .then(() => console.log("Tables created"))
    .catch(err => console.log(err));

app.listen(process.env.PORT, () => {
    console.log(`Server is connected on port ${process.env.PORT}`);
})