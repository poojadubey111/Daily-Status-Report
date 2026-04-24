require("dotenv").config();
const express = require('express');
const app = express();
const db = require("./models");
// const sequelize = require('./config/db');
const routes = require("./routes/role");
const authRoutes = require("./routes/auth");
const protectedRoutes = require("./routes/protected");
const permissionRoutes = require("./routes/permission");
const adminRoutes = require("./routes/admin");
const jobRoutes = require("./routes/job")
const applicationRoutes = require("./routes/application");
const userRoutes = require('./routes/user');
const recruiterRoutes = require('./routes/recruiter')

app.use(express.json());
app.use("/", routes);
app.use("/auth", authRoutes);

app.use("/api", protectedRoutes);
app.use("/permissions", permissionRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/jobs",jobRoutes)
app.use("/api/applications",applicationRoutes);
app.use("/api/users",userRoutes);
app.use("/api/recruiters",recruiterRoutes);




app.listen(process.env.PORT, () => {
    console.log(`Server is connected on port ${process.env.PORT}`);
})