function longestWord(str){
    let current ="";
    let longest = "";

    for(let i=0;i<str.length;i++){
        if(str[i] !== " "){
            current += str[i];
        }else{
            if(current.length > longest.length){
                longest=current;
            }
            current = "";
        }
    }
    if(current.length > longest.length){
                longest=current;
            }
            return longest;
}

const str = "i am learning javascript programming";
console.log( longestWord(str));