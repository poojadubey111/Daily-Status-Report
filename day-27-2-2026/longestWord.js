function longestWord(str){
    let current = "";
    let longestW = "";
    for(let i=0;i<str.length;i++){
        if(str[i] !== " "){
            current += str[i];

        }else{

     if(current.length > longestW.length){
            longestW = current;
               } 
               current="";
        }
    }
    if(current.length > longestW.length){
            longestW = current;
               }
               return longestW;
}

let str = "I am a Software Developer";
console.log(longestWord(str));