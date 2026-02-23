// WAP to find the given string is Palindrome or not.


function palindrom(str){
    let rev = "";
    for(let i=str.length-1;i>=0;i--){
        rev += str[i];
    }

    if(str === rev){
        console.log("It is palindrom..");
    }else{
        console.log(" its  not palindrom");
    }
}

palindrom("madam");
palindrom("abcd");