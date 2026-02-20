const arr = [1,2,3];

arr.forEach(function(value){
    console.log(value);
})

console.log("-----Example ---------")
//i have a list of users and want to send a welcome email to each 
console.log("i have a list of users and want to send a welcome email to each");

const users= ["Alice","Bob","Charlie"];
users.forEach((user,index)=>{
    console.log(`Sending welcome email to ${user}(User #${index +1})`);
})
