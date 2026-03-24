function reverseNum(num,result = 0) {

    if (num ===0 ) return result;
    return reverseNum(
         Math.floor(num/10),
         result * 10 + (num %10)
    )
    
}
console.log(reverseNum(1234567));