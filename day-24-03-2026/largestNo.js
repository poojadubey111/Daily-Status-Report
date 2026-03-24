// 6. Find Largest Number in Array
function largestNo(arr){
    let large = -Infinity;
    for(let i = 0;i<arr.length;i++){
        let num =arr[i];
        if(num >large){
            large = num;
        }
    }
    return large;
}

const arr = [1000,1,2,500,399,250,78,500,800];
console.log(largestNo(arr));