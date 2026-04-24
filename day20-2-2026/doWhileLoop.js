let i=0;
do{ 
    console.log(i); 
    i++;
}while(i<5);

//Try something until it works, but try at least once
//APPROACH:---
// We must attempt at least once → do...while

// We don’t know how many tries it will take → random success

// Keep track of attempts → tries variable

// Stop as soon as operation succeeds → condition !success

let success = false;
let tries = 0;

do {
  tries++;
  success = Math.random() > 0.7;
  console.log(`Attempt ${tries}: ${success ? "Success" : "Fail"}`);
} while (!success);