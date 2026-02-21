// WAP to reverse an integer without converting it to a string, without using any built-in methods.

function revInteger(num){
    let rev = 0;
    let isNegative = false;
    if(num<0){
        isNegative=true;
        num = -num;
    }

    while(num>0){
        let digit= num%10;
        rev = rev*10+digit;
        num = Math.floor(num/10);
    }
    return isNegative ? -rev  : rev ;
}

console.log(revInteger(-12345));