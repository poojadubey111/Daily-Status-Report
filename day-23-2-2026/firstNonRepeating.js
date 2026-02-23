// Find First Non-Repeating Character
// firstUnique("aabbcdde") → "c"

function nonRepeating(str){
    const obj ={};
    for(let i=0;i<=str.length-1;i++){
        if(obj[str[i]]){
            obj[str[i]] ++;
        }else{
            obj[str[i]]=1;
        }
    }
    
        for(let key in obj){
           if(obj[key] === 1){
            return key;
           
           }
        }
    
}

console.log(nonRepeating("aabbcdde"));