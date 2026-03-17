function revOnlyEvnRev(num){
    let temp = num;
    let even = 0;

    while(temp > 0){
        let digit =temp % 10;

        if(digit % 2 === 0){
            even = even * 10 + digit;
        }
        temp =Math.floor(temp/10);
    }

    temp = num;
    let result =0 ;
    let place =1;

    while(temp > 0){
        let digit = temp % 10;

        if(digit % 2 === 0){
            let newDigit = even %10;
            even =Math.floor(even/10);
            result +=newDigit * place;
        }
        else {
            result += digit * place;
        }

        place *= 10;
        temp = Math.floor(temp /10);
    }
    return result;
}


console.log(revOnlyEvnRev(12345678));