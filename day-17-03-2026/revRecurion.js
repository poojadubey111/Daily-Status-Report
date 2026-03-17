// Reverse Number Recursively


function reverse(num,rev = 0){
    if(num === 0) return rev;

    return reverse(
        Math.floor(num/10),
        rev * 10 + num % 10
    );
}
console.log(reverse(123456));