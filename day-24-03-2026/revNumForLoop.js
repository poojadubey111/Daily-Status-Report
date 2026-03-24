function reverseNum(num){
    let isNegative = false;
    let rev = 0;

    if(num < 0){
        isNegative=true;
        num = -num;
    }

    for(;num>0;num=Math.floor(num/10)){
        let digit = num %10;
        rev = rev*10 +digit;
    }

    return isNegative ? -rev : rev;
}

console.log(reverseNum(345));
console.log(reverseNum(-12345));