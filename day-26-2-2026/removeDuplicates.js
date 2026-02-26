function removeDuplicatesFomString(str){

    let obj = {};

    let newStr="";
   for(let i=0;i<str.length;i++){
    if(obj[str[i]]){
obj[str[i]]++;
    }else{
        obj[str[i]]=1;
        newStr += str[i];
    }
   }
   console.log(obj);
   console.log(newStr);
}


removeDuplicatesFomString("programming");