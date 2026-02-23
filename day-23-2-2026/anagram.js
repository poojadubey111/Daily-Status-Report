// 3. Logic for anagram program with its time complexity. (for large strings).
// time complexity O(n) and space complexity is also O(n)

function anagram(str1,str2){
    let obj1={};
    let obj2={};
    if(str1.length !== str2.length){
        return false;
    }
    for(let i = 0;i<=str1.length-1;i++){
        let ch = str1[i];
        if(obj1[ch]){
            obj1[ch]++;
        }else{
            obj1[ch]=1;
        }
    }

     for(let i = 0;i<=str2.length-1;i++){
        let ch = str2[i];
        if(obj2[ch]){
            obj2[ch]++;
        }else{
            obj2[ch]=1;
        }
    }
    for(let i=0;i<=str1.length-1;i++){
        if(obj1[str1[i]] !== obj2[str1[i]]){
            return false;
        }
    }
    return true;
}

console.log(anagram("silent","listen"));