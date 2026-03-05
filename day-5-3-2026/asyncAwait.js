function getNumber(){
  return new Promise(resolve => {
    setTimeout(() => resolve(5), 2000);
  });
}

async function run(){
  let num = await getNumber();
  console.log(num);
}

run();