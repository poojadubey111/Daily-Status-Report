function largest(arr){
    let max = -Infinity;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i];
        }
    }
    return max;
}

const arr = [10, 25, 7, 40];
console.log(largest(arr));