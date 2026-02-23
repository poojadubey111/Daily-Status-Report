// Reverse an array without using built-in reverse().

function reverseArray(arr){
    const rev = [];
    for(let i=arr.length-1;i>=0;i--){
        rev[rev.length]=arr[i];
    }
    return rev;
}
const arr = [1,2,3,4,5,67,50];
console.log(reverseArray(arr));