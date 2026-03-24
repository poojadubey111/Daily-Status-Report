// without sorting
function missingEle(arr){
    let missing= [];
    let min = arr[0];
    let max = arr[0];

    for(let i=0;i<arr.length;i++){
        if(arr[i] <min)min =arr[i];
        if(arr[i] >max)max = arr[i];
    }
    let present =[];

    for(let i=0;i<arr.length;i++){
        present[arr[i]] = true;
    }

    for(let i=min;i<max;i++){
        if(!present[i]){
            missing[missing.length] =i
        }
    }
    return missing;
}

const arr = [12,16,10,20];
console.log(missingEle(arr));