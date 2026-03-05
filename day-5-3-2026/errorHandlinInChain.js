Promise.resolve(10)
.then((num) => {
    throw new Error("Something went wrong");
})
.then(() => {
    console.log("Will not run");
})
.catch((err) => {
    console.log(err.message);
});