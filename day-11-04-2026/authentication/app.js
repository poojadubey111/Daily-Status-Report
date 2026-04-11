const express = require('express');
const app = express();
require('dotenv').config();
const { sequelize } = require("./config/db");

const auth = require("./routes/auth");
app.use(express.json());
app.use("/auth",auth);

sequelize.sync()
  .then(() => {
    console.log("Database synced");

    app.listen(process.env.PORT, () => {
      console.log(`Server running on ${process.env.PORT}`);
    });
  })
  .catch(err => console.log(err));