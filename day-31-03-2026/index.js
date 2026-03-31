const express = require('express');
const app =express();
const sequelize = require('./config/db');
const routes = require('./routes/user.routes');

require('dotenv').config();

app.use(express.json());
app.use(routes);

//Sync DB
sequelize.sync({ alter: true})
.then(()=>{
    console.log("DB synced");
    app.listen(process.env.PORT,() =>{
        console.log("Server running");
    })
})