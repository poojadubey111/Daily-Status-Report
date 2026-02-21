function outer(){
    let count =0;
    return function inner(){
        count++;
        console.log(count);
    }
    inner();
}

const counter = outer();
counter();
counter();