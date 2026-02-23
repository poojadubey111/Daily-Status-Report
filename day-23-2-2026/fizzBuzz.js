// FizzBuzz

// Print numbers 1–100:

// Multiples of 3 → "Fizz"

// Multiples of 5 → "Buzz"

// Both → "FizzBuzz"

function fizzBuzz(n){
    for(let i=1;i<=n;i++){
        if(i % 3 === 0 && i % 5 === 0){
            console.log("FizzBuzz");
        }
        else if(i % 3 === 0){
             console.log("Fizz");
        } else if(i % 5 === 0){
             console.log("Buzz");
        }
    }
}

fizzBuzz(100);