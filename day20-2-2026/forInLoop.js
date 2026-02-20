const obj ={name : "John" , age:25};
for(let key in obj){
    console.log(key);
}


console.log("----------Example------");
const employee ={
    name :"Pooja",
    age:25,
    position:"Developer"
};

for(let key in employee){
    console.log(`${key}:${employee[key]}`);
}