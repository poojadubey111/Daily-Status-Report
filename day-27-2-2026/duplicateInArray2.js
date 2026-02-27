function duplicate(arr){
    let newArr = [];
    for(let i=0;i<arr.length-1;i++){
       for(let j=0;j<arr.length-1-i;j++){
         if(arr[j]>arr[j+1]){
            let temp = arr[j];
            arr[j]=arr[j+1];
            arr[j+1]=temp;
        }
       }
    }
   
   for(let i=0;i<arr.length;i++){
     if(arr[i] !== arr[i+1]){
        newArr[newArr.length]=arr[i];
     }
   }
   return newArr;
}


const arr = [11,12,11,16,6,1,6,18,20,3,12];
console.log(duplicate(arr));