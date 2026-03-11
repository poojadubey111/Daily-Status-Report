function palin(str){
    let rev = "";
    for(let i=str.length-1;i>=0;i--){
        rev +=str[i];
    }

    if(rev === str){
        console.log("String is palindrom");
    }else{
        console.log("Its not palindrom");
    }
}

palin("abc");