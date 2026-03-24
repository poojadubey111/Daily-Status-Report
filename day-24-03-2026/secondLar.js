// Find Second Largest Number

function secLarge(arr){
    let first = -Infinity;
    let second = -Infinity;

    for(let i=0;i<arr.length;i++){
        let num = arr[i];
       if(num>first){
        second = first;
        first=num;
       }else if(num <first && num>second){
        second = num;
       }
    }
    if(second === -Infinity){
        return "second largest not found...";
    }
    return second;
}

const arr = [133,133];
console.log(secLarge(arr));