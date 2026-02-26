setTimeout(() => console.log("1"), 0);

Promise.resolve().then(() => console.log("2"));

setTimeout(() => console.log("3"), 0);

console.log("4");

console.log("****************** New ********************");
console.log(1);

setTimeout(() => console.log(2));

Promise.resolve().then(() => {
  console.log(3);
  setTimeout(() => console.log(4));
});

console.log(5);


console.log("****************** New ********************");
async function test() {
  console.log("A");
  await Promise.resolve();
  console.log("B");
}
test();
console.log("C");


console.log("****************** New ********************");

console.log("Start");

setTimeout(() => console.log("Timeout 1"), 0);

Promise.resolve()
  .then(() => {
    console.log("Promise 1");
  })
  .then(() => {
    console.log("Promise 2");
  });

setTimeout(() => console.log("Timeout 2"), 0);

console.log("End");



console.log("****************** New ********************");
// Nested Microtasks Inside Macrotask

setTimeout(() => {
  console.log("A");

  Promise.resolve().then(() => {
    console.log("B");
  });

}, 0);

Promise.resolve().then(() => {
  console.log("C");
});

console.log("D");

console.log("****************** New ********************");
// 2. Multiple .then() Chains

Promise.resolve()
  .then(() => {
    console.log(1);
  })
  .then(() => {
    console.log(2);
  });

Promise.resolve().then(() => {
  console.log(3);
});

// Microtask queue order:

// First promise .then() → logs 1

// Second independent promise → logs 3

// Then chained .then() → logs 2

//Each .then() schedules a new microtask.


console.log("****************** New ********************");
// 3. Async/Await + setTimeout
async function test() {
  console.log("A");
  await null;
  console.log("B");
}

setTimeout(() => console.log("C"), 0);

test();

console.log("D");

//  Output:
// A
// D
// B
// C

// 4. Microtask Starvation
console.log("****************** New ********************");
setTimeout(() => console.log("Timeout"), 0);

function loop() {
  Promise.resolve().then(loop);
}

loop();

// Output:
// (Timeout never runs)

// Why:

// Microtasks keep adding microtasks → event loop never reaches macrotask.

//This is microtask starvation.


// 5. Mixing queueMicrotask and Promise

queueMicrotask(() => {
  console.log("A");
});

Promise.resolve().then(() => {
  console.log("B");
});

console.log("C");

// Both are microtasks.
// They execute in insertion order.