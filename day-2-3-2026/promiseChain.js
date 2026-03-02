function step1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Step 1 completed");
      resolve("Data from Step 1");
    }, 1000);
  });
}

function step2(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Step 2 received:", data);
      resolve("Data from Step 2");
    }, 1000);
  });
}

function step3(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Step 3 received:", data);
      resolve("All Done");
    }, 1000);
  });
}

step1()
  .then(result => step2(result))
  .then(result => step3(result))
  .then(finalResult => console.log(finalResult))
  .catch(error => console.log(error));