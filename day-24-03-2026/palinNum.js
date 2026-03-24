function palindromNum(num){
    let original =num;
    let rev = 0;
    while(num > 0){
        let digit = num % 10;
        rev = rev *10 + digit;
        num = Math.floor(num/10);
    }

    return original === rev;
}

console.log(palindromNum(123));