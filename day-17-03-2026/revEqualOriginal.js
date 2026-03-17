// Check if Reversed Number Equals Original
function revEqualOriginal(num){
    let temp = num;
    let rev = 0;
    while(temp > 0){
        let digit = temp %10 ; 
        rev =rev *10 +digit ;
        temp = Math.floor(temp/10);
    }
  
    
    return rev===num ;
}

console.log(revEqualOriginal(121));