// Count Digits
// Input: 123456
// Output: 6



function countDigit(num){
    let str = num.toString(); 
    let count = 0;
    for(let i =0;i<str.length;i++){
        count++;
    }
    return count;
}

console.log(countDigit(1234567));