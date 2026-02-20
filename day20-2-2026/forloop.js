//print nos fom 1 to 5
//approach --> in for loop i initialize with 1 because we want nos from 1 
//gives condition check for less than equal to 5 and increament the i value ,simply console i 
console.log("Print numbers from 1 to 5");
for(let i=1;i<=5;i++){
    console.log(i);
}



//print even nos. from 0 to 10 ;
//approach -->want even nos so even nos means pick those no whose reminder is 0 after divided by 2 so,
//condition is num %2 === 0 is even 
console.log("Print even numbers from 0 to 10");
for(let i=0;i<=10;i++){
   if(i % 2 === 0){
     console.log(i);
   }
}