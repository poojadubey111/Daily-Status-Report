// Remove all falsy values from array

function removeFalsyValues(arr){
    let truthy = [];
   for(let i=0;i<arr.length;i++){
     if(arr[i]){
        truthy[truthy.length]=arr[i];
    }
   }
    return truthy;
}
const arr= [0,1,false,2,"",3,null,4,undefined];
console.log(removeFalsyValues(arr));