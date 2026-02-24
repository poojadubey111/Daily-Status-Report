// Q1 – Var redeclaration

var a = 10;
var a = 20;
console.log(a);
// Explanation: var allows redeclaration in the same scope. Last value overwrites the first.


// Q2 – Let redeclaration

// let b = 10;
// let b = 20;
// console.log(b);

//SyntaxError: Identifier 'b' has already been declared

// Q3 – Const redeclaration
// const c = 5;
// const c = 15;
// console.log(c);
// SyntaxError: Identifier 'c' has already been declared

// Reassignment
// Q4 – Var reassignment
var a = 10;
a = 20;
console.log("Var reassignment",a);
// 20 
// var can be reassigned.

// Q5 – Let reassignment
// let b = 10;
// b = 20;
// console.log("Let reassignment",b);
// 20 
// let can be reassigned but not redeclared.

// Q6 – Const reassignment
// const c = 10;
// c = 20;
// console.log("Const reassignment",c);
// TypeError: Assignment to constant variable.

// Q7 – Const object mutation

const obj = { name: "John" };
obj.name = "Doe";
console.log("Const object mutation",obj.name);




  let a =20;
{
  var b =20;
  a =12
}
console.log(a)
