console.log(0 == false);              //true
console.log(0 === false);             //false


console.log("" == 0);                 //true
console.log("" === 0);                //false

console.log(null == undefined);       //true
console.log(null === undefined);      //false

console.log("5" == 5);                //true
console.log("5" === 5);               //false

console.log([] == false);             //true
// console.log([] === false);         //false

console.log([1] == 1);                //true
// console.log([1] === 1);            //false



console.log([] == []);               //false
// console.log([] === []);


console.log(NaN == NaN);                //false
console.log(NaN === NaN);               //false


console.log(" \t\n" == 0);              //true
console.log(" \t\n" === 0);             //false

// Whitespace string converts to 0.

console.log(true == "1");                //true
console.log(true === "1");               //false


console.log([] == ![]);           //true

console.log([] == 0);             //true
console.log([0] == 0);            //true
console.log([0] == "0");          //true

console.log(null == 0);           //false
console.log(null >= 0);           //true

console.log("" == false);    //true
console.log("" == 0);        //true
console.log(false == 0);    //true


console.log(NaN == NaN);          //false
console.log(NaN === NaN);         //false
console.log(Object.is(NaN, NaN));   //true

let d = new Date("2020-01-01");

console.log(d == "2020-01-01T00:00:00.000Z");        //false
console.log(d === "2020-01-01T00:00:00.000Z");       //false


console.log(true == "true");       //false
console.log(true == "1");          //true


console.log([] == ![]);            //true

console.log([] == "");             //true 
// console.log([] === "");         //false  

let a = {};
let b = {};

console.log(a == b);               //false
console.log(a === b);              //false


console.log(0 == "0" == []);
// false
// Step-by-step:
// 0 == "0" → true
// Now: true == []
// true → 1
// [] → 0
// 1 == 0 → false