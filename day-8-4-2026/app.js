
const express = require("express");
const { sequelize } = require("./models");
require("dotenv").config();
const morgan =require("morgan")

const app = express();
app.use(express.json());
app.use(morgan("tiny"));

app.use("/auth", require("./routes/auth.routes"));
app.use("/protected", require("./routes/protected.routes"));
 

(async () => {
  await sequelize.sync({ alter: true });

  console.log("DB Connected");

  app.listen(process.env.PORT, () => {
    console.log("Server running");
  });
})();