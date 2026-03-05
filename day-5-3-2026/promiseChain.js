let promise =new Promise((resolve,reject)=>{
    resolve(2);
});

promise.then((num) =>{
    console.log(num);
    return num *2;
})
.then((num)=>{
    console.log(num);
    return num *2;
})
.then((num) =>{
    console.log(num);
});