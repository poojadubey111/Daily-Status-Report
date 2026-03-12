const express = require("express")

const app = express()

app.listen(3000, ()=>{
    console.log("successully connected on port 3000 !!")
})

// app.get('/', (req,res)=>{
//     res.send(
//         {
//             name:"Pooja",
//             age:25
//         }
      
//     )
// })


// app.get('/', (req,res)=>{
//     res.send(
       
//         ['Apple','Banana','Mango']
//     )
// })




// app.get('/',(req,res) =>{
//     res.json(
//         {name: 'Pooja' , age:25}
//     )
// })




app.get('/',(req,res) =>{
    const user= [
        {id:1,name:"John"},
        {id:2,name:"Rohan"}
    ]
    res.json(user);
})


