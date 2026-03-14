var a = 10;

function test() {
  console.log(a);
  a = 20;
  console.log(a);
  var a = 30;
}

test();




//-----------------------------------------
var a = 10;

function test() {
  console.log(a);
  var a = 20;
}

test();

//-------------------------------------------
var a = 10;

function test() {
  console.log(a);
  function a(){}
}

test();

//----------------------------------------------
var a = 10;

function test() {
  console.log(a);
  var a = 20;

  function a(){}
}

test();
//--------------------------------------------------
var a = 1;

function test() {
  a = 10;
  console.log(a);

  var a = 20;
}

test();

console.log(a);


//--------------------------------------
console.log(a);

var a = 10;

function a(){}

console.log(a);