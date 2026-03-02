const myPromise = new Promise((resolve,reject)=>{
    let success =true;

    if(success){
        resolve("Data received");
    }else{
        reject("Error occured");
    }
});

myPromise
.then(result => console.log(result))
.catch(error => console.log(error))
.finally(()=> console.log("Done"));