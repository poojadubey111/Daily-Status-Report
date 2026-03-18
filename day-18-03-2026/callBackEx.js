function greet(name,callback){
    console.log("hello",name);
    callback();
}

greet("Pooja",function(){
console.log("callback executed");
})