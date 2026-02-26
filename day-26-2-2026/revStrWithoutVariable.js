
function reverseString(str,index = str.length-1){
    if (index < 0 ) return "";
    return str[index] + reverseString(str,index -1);
}

console.log(reverseString("hello"));