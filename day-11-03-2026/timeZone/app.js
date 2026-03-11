const express = require("express");


const app = express();
const PORT = 3000;

app.get("/time",(req,res)=>{
    const timezones = {
        India:"Asia/Kolkata",
        USA:"America/New_York",
        UK:"Europe/London",
        Japan:"Asia/Tokyo",
        Australia:"Australia/Sydney"
    };

    const result ={};
    for(let country in timezones){
        result[country]= new Date().toLocaleString("en-US",{
            timeZone:timezones[country]
        });
    }
    res.json(result);
})

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
});