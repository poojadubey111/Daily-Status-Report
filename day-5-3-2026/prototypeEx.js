function User(name){
    this.name=name;
}

User.prototype.sayHello = function(){
    console.log("Hello");
}

let u1 = new User("Pooja");
let u2 = new User("John");

u1.sayHello();