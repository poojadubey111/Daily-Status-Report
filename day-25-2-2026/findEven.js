function findEven(arr){
    let even = [];
    for(let i=0;i<arr.length;i++){
        if(arr[i] % 2 === 0){
            even[even.length] =arr[i];
        }
    }
    return even;
}

let arr = [1,2,3,4,5,6,7,8,9];
console.log(findEven(arr));