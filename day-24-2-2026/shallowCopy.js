const original = {
  name:"John",
  address : {
    city : "Delhi"
  }
};


const copy = { ...original};

copy.name = "Mike";
copy.address.city= "Mumbai";

console.log(original.name);
console.log(original.address.city);
