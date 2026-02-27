function duplicate(arr){
    let obj = {};
    let dupli= [];
    for(let i=0;i<arr.length;i++){
        if(obj[arr[i]]){
            obj[arr[i]]++;
            dupli[dupli.length]=arr[i];
        }else{
            obj[arr[i]]=1;
        }
    }
    return dupli;
}

let arr = [11,12,13,14,15,16,11,14,15,19,20];
console.log(duplicate(arr));