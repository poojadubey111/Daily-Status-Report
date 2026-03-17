// Reverse Only First N Digits

function reverseFirstN(n, num) {
   let str = num.toString();
   let rev ="";

   for(let i =n-1;i>=0;i--){
    rev += str[i];
   }

   for(let i=n;i<str.length;i++){
    rev += str[i];
   }
   return rev;

}

console.log(reverseFirstN(3,1234567));