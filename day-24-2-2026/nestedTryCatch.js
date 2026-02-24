try{
    try{
        throw new Error('my error');
    }catch(err){
        console.error('inner',err.message);
        throw err;
    }finally{
        console.log('inner finally');
    }
}catch(err){
    console.log(err.message);
}