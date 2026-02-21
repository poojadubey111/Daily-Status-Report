function sendAutoEmail(to){
    return function(subject){
        return function(body){
            console.log(`Sending Email to ${to} with subject: ${subject}: ${body}`)
        };
    };
}

let step1 = sendAutoEmail('pooja@gmail.com');
let step2 = step1('New Order Confirmation');
let step3 = step2("Hey Pooja,here is something for you..");