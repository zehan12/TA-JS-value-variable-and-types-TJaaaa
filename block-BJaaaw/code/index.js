// if..else

/*
1. Write a program that asks the user for a number and check the following conditions:

  - `if` the number is even print the message " number is even"
  - `if` the number is odd print the message "number is odd"
*/

// 2. Write a program to accept two numbers from user using`prompt` and alert the max value.

// 3. Convert the above code using`?` terniary operator

/*
4. Write a program that asks the user for the house name and check the following conditions:

  - `if` house name is "stark" then print the message " Winter is coming"
  - `if` house name is "lannister" then print the message " A lannister always pays his debt"
  - `else` print the message " All men must die"
*/

// 5. Convert the above code using`?` terniary operator

// Switch

// 6. Write a program that takes the number of the month(1 - 12) and alert number of days in the month.

/* 7.
- Write a program that take the salery of the user using prompt and alert the in -hand amount.You will find out the in -hand amount by deducting the tax amoun from salery.Conditions are given below.
  - `Salary <= 20000` tax is 10 %
  - `Salary <= 40000` tax is 20 %
  - `Salary > 50000` tax is 30 %

*/

//  if..else vs switch

/* 8.
Implement the condition give below using`if..else` and`switch` statement.

  - `marks > 100` alert`"Marks can't be greater than 100"`
  - `marks > 80 && marks < 100` alert`"Grade A"`
  - `marks > 50 && marks < 80` alert`"Grade B"`
  - `marks > 30 && marks < 50` alert`"Grade C"`
  - `marks > 0` alert`"Grade D"`

*/

/* 9. Weather app

  - Ask user to provide the condition of the weather outside by asking `What is the weather like outside?`
  - If user says`sunny` alert`Wear a T-shirt`
  - If`rainy` alert`Don't forget to take your raincoat`
  - If`hot` alert`Get a hanky`
  - If`freezing` alert`Get your sweeter on`
  - Anything else should alert`Not a valid input`
*/


//1 ask user for the number even or odd
let num = prompt(`Enter any number`);

if (num % 2 == 0){
  alert(`The Number you enter is Even : ${num}`)
} else if (num % 2 !==0){
  alert(`The Number you enter is Odd : ${num}`)
}


//4 write a program accept value from a user

let numA = prompt('Enter number A');
let numB = prompt(`Enter number B`);

if (numA > numB) {
  alert(`A is greater than B`);
} else if (numA < numB) {
  alert(`B is greater than A`)
}


//3 ask user for the number even or odd in terniary 
(num % 2 == 0) ? alert(`The Number you enter is Even : ${num}`) : alert(`The Number you enter is Odd : ${num}`)


// 4 ask user to enter house name 
let house = prompt(`Enter any house name`);


if (house == 'stark' ){
  alert(" Winter is coming");
} else if (house == 'lannister' ) {
  alert(" A lannister always pays his debt");
} else {
  alert("All men must die");
}


//5 ask user to enter house name by ternary
let house = prompt(`Enter any house name`);

house == "stark" ? alert("Winter is comming"): alert("All men must die");


//6 take month no.

let month = prompt("Enter any month no.");

switch (month){
   case '1':
   case '3':
   case '5':
   case '7':
   case '8':
   case '10':
   case '12':  
      alert("31 days");
      break;
   case '2':
      alert(`29 days`);
      break;
   case '4':
   case '6':
   case '9':
   case '11':
     alert("30 days");
     break;
   default :
     alert("Invalid")
}


//7 salary -in hand

let Salary = prompt(`Enter in -hand Amount`);

if ( Salary <= 20000 ){
  alert(`tax is 10%`);
} else if ( Salary <= 40000 ){
  alert(`tax is 20%`);
} else if ( Salary > 50000 ){
  alert(`tax is 30%`);
}

// 8 alert the grade 


let marks = prompt(`enter your Marks`);

if ( marks > 100 ){
  alert("Marks can't be greater than 100")
}else if ( marks > 80){
  alert("Grade A");
} else if ( marks > 80){
  alert("Grade A");
} else if ( marks > 50){
  alert("Grade B");
} else if ( marks > 30 ){
  alert("Grade C");
} else if ( marks > 0 );{
  alert("Grade D");
}

// alert the grade with switch

let marks = prompt("enter your Marks");

switch(true){
  case (marks > 80 && marks < 100): // (marks < 80) == true;
    alert("Grade A");
    break;
  
  case (marks > 50 && marks < 80) :
     alert("Grade B");
     break;

  case (marks > 80 && marks < 50) :
    alert("Grade C");
    break;
  
  case (marks > 0) :
    alert("Grade D");
    break;
}




// 9 wheater outside 

let wheater = prompt(`What is the weather like outside?`);

if ( wheater == `sunny`){
   alert(`Wear a T-shirt`);
} else if ( wheater == `rainy`){
  alert(`Don't forget to take your raincoat`);
} else if ( wheater == `hot`){
  alert(`Get a hanky`);
} else if ( wheater == 'freezing'){
  alert(`Get your sweeter on`)
} else {
  alert(`Not a valid input`);
}