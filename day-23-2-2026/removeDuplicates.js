function removeDuplicate(arr){
    let seen = {};
    let result = [];

    for(let i=0;i<arr.length;i++){
        if(!seen[arr[i]]){
            seen[arr[i]]=true;
            result.push(arr[i]);
        }
    }
return result;
}

const arr = [11,1,3,4,5,6,1,11,5,9,8,50];
console.log(removeDuplicate(arr));