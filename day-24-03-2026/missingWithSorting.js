function missingEle(arr){
    let missing = []; 
    for(let i = 0;i<arr.length;i++){
        for(let j=0;j<arr.length-1;j++){
           if(arr[j] > arr[j+1]){
             let temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp ;
           }
        }
    }
    for(let i= 0;i<arr.length;i++){
        let current = arr[i];
        let next =arr[i+1];

        for(let j=current +1;j<next;j++){
            missing[missing.length] = j;
        }
    }
    return missing;
}

const arr = [17,19,25,10];
console.log(missingEle(arr));