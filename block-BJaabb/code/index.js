/* 1. Do the following

1. Declare a variable `user` and take the name using `prompt`. Display the value stored in `user` using `alert`.
2. Now copy the value of `user` into a new variable named `userName`. Log the value of both `user` and `userName` using `console.log`.
3. Declare variable `age` and `isLearning` with value `22` and `true` in the same line. hint: declaring multiplemvariable in one line.
4. Now change the value of `user` to `John` and log the value of both `user` and `userName`.
*/

/* 2.
Use `prompt` to take two numbers from user and store it in variable `numA` and `numB`. Create a third variable called `sum`, using `+` operator add numA and numB , store it in varible `sum` and using alert display `sum` in browser.
*/

// Loops

// 3. Complete the following code to make the output be 0 2 4 6 8 10?

// for (let j = 0; j <= 10; ____) console.log(j);

// 4. Print the odd numbers from 9 to 1 (both inclusive) using a for loop.

// 5. Concat all the numbers from 5 to 0 (both inclusive) in descending order using a while loop. (543210)

// 6. Concat all the even numbers from 10 to 0 (both inclusive) in descending order using a while loop. (1086420)

// Comparisoin

/* 7. Take two value using prompt and store them in variables `num1` and `num2`. Check whether they are equal or not.

- `alert` true or false base on the entered value.
- if the input value is anything like `true`, `null` or `undefined` alert saying `Enter a valid value`.


Example:

21, 21; // true
"hello", -21; // false

*/


//task #1

// 1
let user 

user = prompt("Enter the user");

alert(user);


//2
let userName = user

console.log(user + userName)

//3 
let age 
let isLearning

{age = 22, isLearning = "true"};

alert(age + isLearning);

//4
user = "jhon";

console.log(user + userName)

//task #2

let numA = prompt("Enter any number for A")

let numB = prompt("Enter any number for B")

let sum = Number(numA) + Number(numB);

alert(`Sum of number A and number B is ${sum}`);


// //task #3

for (let j = 0; j <= 10; j = j + 1) {
    counsole.log(count++);
    if(j % 2 == 0)
    console.log(j);
}

for (let j = 0; j <= 10; j += 2) {
    console.log(j);
}


// //task #4

for (let i = 9 ; i >= 1 ; i = i - 1){
    if (i % 2 == 1)
    console.log(i);
}

// //task #5

let c = "";
let i = 5 ;
while ( i >= 0 ){
    c = c + i; 
    i = i -1;
}
console.log(c);


//task #6

let c = "";
for (let i = 10 ; i >= 1 ; i = i - 1){
    if (i % 2 == 2)
    console.log(c);
}


//task #7
let num1 = prompt("enter num1");
let num2 = prompt("enter num2");

 if (typeof num1 == "number" && typeof num2 == "number" ){
if (num1 == num2){
    alert("true")
} else if (typeof num1 == "number" && typeof num2 == "number"){    
}if (num1 != num2 ){
    alert("false")
} else {
    alert("valid vlaue")
}
}



if (isNaN(num1) || isNaN(num2)){
    alert('enter a valid value');
} else {
    alert(num1 === num2)
}
