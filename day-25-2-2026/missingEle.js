// WAP to find missing elements from the array?


function missingArr(arr){
     let missing =[];
     
     for(let i = 0;i<arr.length;i++){
        let currEle = arr[i];
        let nextEle = arr[i+1];
        if(nextEle - currEle >1){
            let temp = arr[i];
            arr[i]=arr[i+1];
            arr[i+1]= temp;
        }
     }
     return arr;
}
const arr = [1,5,9,10,4,2];
console.log(missingArr(arr));