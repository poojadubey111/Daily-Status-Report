try{
    throw new Error('my error');
}catch(err){
    console.error(err.message);
}


try{
    throw new Error('my Error');
}catch(err){
    console.log(err.message);
}finally{
    console.error('finally');
}


// try {
//    throw new Error('my error');
// } finally {
//   console.error('finally');
// }


