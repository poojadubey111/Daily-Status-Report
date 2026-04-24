//Move all zeros in an array to the end without changing the order of other elements.

function moveZeroToEnd(arr){
    for(let i=0;i<arr.length-1;i++){
        let temp;
        if(arr[i] === 0){
             temp =arr[i];
           
            arr[i] = arr[i+1];
            arr[i+1] = temp;
             
        }
       
    }
    return arr;
}

const arr = [1,2,3,0,6,7,0,8,0,0,12,16,17,18,0];
console.log(moveZeroToEnd(arr));