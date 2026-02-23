// Sum of all even numbers in array

function sumOfEvenNo(arr){
    let sum =0 ;
    for(let i=0;i<arr.length;i++){
        if(arr[i] % 2 ===0){
            sum += arr[i];
        }
    }
    return sum;
}

const arr = [1,2,3,4,5,6];
console.log(sumOfEvenNo(arr));