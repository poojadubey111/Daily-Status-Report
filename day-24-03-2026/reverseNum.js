// Reverse a Number

function reverseNum(num){
    let rev =0;
    let isNegative= false;
    if(num < 0){
        isNegative=true;
        num=-num;
    }

    while(num >0){
        let digit = num %10;
        rev = rev*10+digit;
        // num=Math.floor(num/10);
        num =num/10 | 0;
    }
    return isNegative ?-rev : rev ;
}


console.log(reverseNum(12345));
console.log(reverseNum(-12345));