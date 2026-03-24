function freqEle(arr){
    let obj = {};
    for(let i=0;i<arr.length;i++){
        if(obj[arr[i]]){
            obj[arr[i]]++;
        }else{
            obj[arr[i]]=1;
        }
    }
    for(let key in obj){
        console.log(key,obj[key]);
    }
}

const arr = [11,12,13,14,12,11,90];
freqEle(arr);