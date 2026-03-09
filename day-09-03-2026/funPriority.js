// Function Declaration vs Function Expression
foo();

var foo = function () {
  console.log("A");
};

function foo() {
  console.log("B");
}                                       // function declaration wins 


test();

(function () {
  console.log("IIFE");
})();

function test() {
  console.log("Test");
}

