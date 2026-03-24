// . Remove Duplicates from Array

function removeDuplicate(arr){
    let result =[];
    for(let i=0;i<arr.length;i++){
        let found =false;
        for(let j=0;j<result.length;j++){
            if(arr[i] === result[j]){
                found = true;
                break;
            }
        }
        if(!found){
            result[result.length] = arr[i];
        }
    }
    return result;
}

const arr = [100,190,67,34,100,60,50,67];
console.log(removeDuplicate(arr));