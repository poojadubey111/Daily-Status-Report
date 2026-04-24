require("dotenv").config();

const express = require("express");
const app = express();

const { sequelize } = require("./models"); // ✅ IMPORTANT


const authRoutes = require("./routes/auth");
const protectedRoutes = require("./routes/protected");

app.use(express.json());


app.use("/auth", authRoutes);
app.use("/protected", protectedRoutes);

sequelize.sync( {alter:true}).then(() => {
  console.log("DB synced");

  app.listen(process.env.PORT, () => {
    console.log(`Server running on ${process.env.PORT}`);
  });
});