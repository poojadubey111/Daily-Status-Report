// WAP to find the second largest number in an array without sorting.


function secondHighest(arr){
    let firstHighest = -Infinity;
    let secondHighest = -Infinity;

    for(let i=0;i<=arr.length;i++){
        let num =arr[i];
        if(num>firstHighest){
           
            secondHighest=firstHighest;
             firstHighest=num;
        }else if(num <firstHighest && num>secondHighest){
            secondHighest=num;
        }else if(secondHighest === -Infinity){
            console.log("second highest is not found...");
        }
    }
    return secondHighest;
}

let arr = [12, 35, 1, 10, 34, 1, 35];
console.log(secondHighest(arr));