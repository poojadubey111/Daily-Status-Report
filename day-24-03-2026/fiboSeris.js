function fibo(count){
    let n1 = 0;
    let n2 = 1;
    for(let i =0;i<count;i++){
        console.log(n1);
        let next =n1+n2;
        n1 = n2;
        n2=next;
    }
}

fibo(10);