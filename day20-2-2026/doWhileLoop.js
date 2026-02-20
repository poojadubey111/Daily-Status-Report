let i=0;
do{ 
    console.log(i); 
    i++;
}while(i<5);



let success = false;
let tries = 0;

do {
  tries++;
  success = Math.random() > 0.7; // 30% chance
  console.log(`Attempt ${tries}: ${success ? "Success" : "Fail"}`);
} while (!success);