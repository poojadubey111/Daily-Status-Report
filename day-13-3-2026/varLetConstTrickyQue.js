var a = 10;
var a = 20;
console.log(a);



let a = 10;
let a = 20;
console.log(a);


let a = 10;
a = 20;
console.log(a);

let a = 10;
a = 20;
console.log(a);



var a = 10;

{
   var a = 20;
}

console.log(a);



let a = 10;

{
   let a = 20;
}

console.log(a);




var a = 10;
let a = 20;
console.log(a);


let a = 10;

{
   let a = 20;
}

console.log(a);


let a = 10;
var a = 20;
console.log(a);


const obj = { name: "John" };

obj.name = "Sam";

console.log(obj.name);



const obj = { name: "John" };

obj = { name: "Sam" };

console.log(obj.name);



var a = 10;

function test(){
    console.log(a);
    let a = 20;
}

test();



let a = 10;

{
   var a = 20;
}

console.log(a);


//-----------------------------------------
var a = 10;

function test(){
   a = 20;
   var a;
   console.log(a);
}

test();
console.log(a);
//------------------------------------------------
let a = 10;

function test(){
   console.log(a);

   if(true){
      var a = 20;
   }

   console.log(a);
}

test();