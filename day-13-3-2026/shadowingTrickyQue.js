let a = 10;

{
   let a = 20;
   console.log(a);
}

console.log(a);


//-------------------------------------------------------

var b = 10;

{
   let b = 20;
}

console.log(b);



//------------------------------------------------




let c = 10;

function test(){
   let a = 20;
   console.log(c);
}

test();
console.log(c);

//------------------------------------------------
let d = 10;

function test(){
   console.log(d);
   let a = 20;
}

test();


//---------------------------------------------
var e = 10;

function test(){
   console.log(e);

   if(true){
      var e = 20;
   }

   console.log(e);
}

test();

//--------------------------------------------------


function test(){
   var a;            // hoisted

   console.log(a);



   if(true){
      a = 20;
   }

   console.log(a);
}

let f = 10;

function test(){
   console.log(f);

   if(true){
      let f = 20;
   }
}

test();