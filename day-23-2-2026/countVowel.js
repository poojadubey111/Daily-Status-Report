function countVowels(str){
    let count = 0;
    for(let i=0;i<str.length-1;i++){
        if(str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u"){
            count++;
        }
    }
    console.log("Vowel count is : ",count );
}

countVowels("stringabcd");