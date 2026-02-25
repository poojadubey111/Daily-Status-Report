var a = 10;

function test() {
  console.log(a);
  var a = 20;
}

test();

console.log("********New***********");
var a = 10;

function test() {
  console.log(a);
  var a = 20;
}

test();


console.log("********New***********");
let a = 10;

function test() {
  console.log(a);
  let a = 20;
}

test();

console.log("********New***********");
const a = 10;

{
  console.log(a);
  const a = 20;
}
console.log("********New***********");
var a = 10;

{
  let a = 20;
}

console.log(a);

console.log("********New***********");


console.log("********New***********");


console.log("********New***********");