// Find Largest Number in Array 

function findLargest(arr){
    let highest = -Infinity;
    for(let i=0;i<arr.length;i++){
        let num =arr[i];
        if(num > highest){
            highest = num;
        }
    }
    return highest;
}
const arr = [12,17,19,12,100,114,11,1];
console.log(findLargest(arr));