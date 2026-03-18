function factorial(n){
    let fact =1;
    let i =1;
    while(i<=n){
        fact *= i ;
        i++;
    }
    return fact;
}
console.log(factorial(5));