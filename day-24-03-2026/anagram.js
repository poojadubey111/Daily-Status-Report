function isAnagram(str1,str2){
    let obj1 = {};
    let obj2 = {};
     if (str1.length !== str2.length) return false;
    for(let i=0;i<str1.length;i++){
        let char = str1[i];
        if(obj1[char]){
            obj1[char]++;
        }else{
            obj1[char]=1;
        }
    }
     for(let i=0;i<str2.length;i++){
        let char = str2[i];
        if(obj2[char]){
            obj2[char]++;
        }else{
            obj2[char]=1;
        }
    }
     for(let key in obj1){
        if(obj1[key] !== obj2[key]){
             return false;
        }
     }
      return true;
}

console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("hello", "world"));   // false