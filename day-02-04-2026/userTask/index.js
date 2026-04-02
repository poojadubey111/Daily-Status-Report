const express = require('express');
const { sequelize } = require('./models');
require('dotenv').config();

const app = express();
app.use(express.json());

// Routes
app.use('/users', require('./routes/userRoutes'));
app.use('/tasks', require('./routes/taskRoutes'));

(async () => {
  try {
    await sequelize.sync({ alter: true }); // 🔥 auto create/update tables
    console.log("Database synced");

    app.listen(process.env.PORT, () =>
      console.log(`Server running on port ${process.env.PORT}`)
    );
  } catch (err) {
    console.error(err);
  }
})();