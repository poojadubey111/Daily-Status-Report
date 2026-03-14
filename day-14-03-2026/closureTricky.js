function outer() {
  let a = 10;

  function inner() {
    console.log(a);
  }

  return inner;
}

const fn = outer();
fn();
//----------------------------------------------------------


function counter() {
  let count = 0;

  return function () {
    count++;
    console.log(count);
  };
}

const c = counter();

c();
c();
c();

//-----------------------------------------------------------
for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}
//----------------------------------------------------------

for (let i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}
//------------------------------------------------------
function outer(x) {
  return function inner(y) {
    console.log(x + y);
  };
}

const add5 = outer(5);

add5(3);
add5(10);
//-------------------------------------------------------------
function counter() {
  let count = 0;

  return function () {
    count++;
    console.log(count);
  };
}

const c1 = counter();
const c2 = counter();

c1();
c1();
c2();
c2();
//----------------------------------------------------------------