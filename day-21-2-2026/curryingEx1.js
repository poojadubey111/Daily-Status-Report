function add (a){
    return function(b){
        return function(c){
            return a+b+c;
        }    
    }
}

const sum = add(2)(3)(4);
console.log(sum);