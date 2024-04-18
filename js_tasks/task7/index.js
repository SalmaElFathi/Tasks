/*Here’s how you convert your age from “human years” to “dog years”:
The first two years of a dog’s life count as 10.5 dog years each.
Each year following equates to 4 dog years. */


const myAge=20;
//initialize the variable myAge with my real age 
const earlyYears=2*10.5;
//initialize the variable earlyYears with 2
const laterYears=4*(myAge-2);
//caclulate the lateryears in dog years 
 const myAgeInDogYears=earlyYears+laterYears;
 //initialize myAgeInDogYears with the sum of my earlyYears and laterYears
 const myName="SALMA".toLowerCase();
 //change letters to lowercase letters
console.log("My name is "+myName+"I am "+myAge+" years old in human years which is "+myAgeInDogYears+" years old in dog years");