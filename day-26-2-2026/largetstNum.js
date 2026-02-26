// Find the Largest of 3 Numbers


function findLargest(a,b,c){
    if(a>b && a>c){
        return "a is a largest no."
    }else if(b>a && b>c){
        return "b is largest no."
    }else{
        return "c is largest no";
    }
}

console.log(findLargest(1,35,90));