// Using alert, prompt, confirm and console

/*

1. Do the following using `alert` function. When you find any square bracket
 replace that to the value of the variable.

*/

let num1 = 21;
let num2 = 32;

/*
- Create a variable named `language` and store the value of `JavaScript` in it
- Alert message saying `I am learning [language]`
- Alert `The value of num1 is [num1] and the value of num2 is [num2]`
- Alert `The sum of [num1] and [num2] is [num1 + num1]`
*/

/*
2. Do the following using `alert`, `prompt` and `confirm` and `console`

  - Using prompt accept the name of the user and store it a variable names `userName`
  - Using prompt accept the profession of the user and store it a variable names`userProfession`
  - Using confirm check if user is adult or not and store the value in `isAdult`
  - Alert message `I am [userName] a [userProfession]`
  - Log the message `I am [userName] a [userProfession]`
  - Alet message `Username: [userName]
    Adult: [isAdult]
    Profession: [userProfession]` (it should be in three different lines)
  - Log the message using console.log `Username: [userName]
    Adult: [isAdult]
    Profession: [userProfession]` (it should be in three different lines)
*/

/*
. Addition using prompt

  - Accept two number values form user and store them in `numA` and`numB`.
  - Alert the sum of both numbers. [numA + numB]
  - Alert [numA - numB]
  - Alert [numA * numB]
  - Log using console.log [numA - numB]
  - Log using console.log [numA * numB]
*/


//alert language
let language = "javascript";
alert(`i am learning ${language}`)

//alert number 
alert(num1);
alert(num2);

//alert sum with value
let sum = num1 + num2;
alert(sum);

//start with prompt
let userName = prompt(`Enter your name`);
let userProfession = prompt('Enter your profession');


//confirm with age
let isAdult = confirm('Are you adult');

//alert message
alert(`i am ${userName} a ${userProfession}`);

//console message
console.log(`i am ${userName} a ${userProfession}`);

//alert message username age
alert(`username : ${[userName]} \n Adult : ${[isAdult]} \n  Profession : ${[userProfession]} `);

//console message
console.log(`username : ${[userName]} \n Adult : ${[isAdult]} \n  Profession : ${[userProfession]}`);
// 
//addition using prompt
let numA = prompt("enter number A");
let numB = prompt("enter number B");

let sum = Number(numA) + Number(numB)

//alert sum of both num
alert(`sum of numbers: ${sum}`);

//alert sub
alert(`subtraction of numbers ${numA - numB}`);

//alert multiply
alert(`multiplication of numbers ${numA * numB}`);

//console two message
console.log(`subtraction of numbers ${numA - numB}`);
console.log(`multiplication of numbers ${numA * numB}`);