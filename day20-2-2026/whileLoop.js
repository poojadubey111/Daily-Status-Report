//---Approach ---
// Start from 0
// Keep printing numbers
// Stop when condition becomes false
let i = 0;
while(i < 5){
    console.log(i);
    i++;
}


//real world use case when we do not known values 
let password = "1234";
while (password !== "admin123") {
    console.log("Invalid password");
    break;
}