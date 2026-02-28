function greet(name){
    console.log("Hello" +name);
}

function processUser(callback){
    let name ="Pooja";
    callback(name);
}


processUser(greet);