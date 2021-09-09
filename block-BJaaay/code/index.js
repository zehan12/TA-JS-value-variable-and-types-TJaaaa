//  Loop basics

// Do the following using loops:

// Using `console.log` log all the values from 1 to 10.

// Using `console.log` log all the evan values from 1 to 10.

// Using `console.log` log all the od values from 1 to 10.

// Calculate the sum of all numbers from 1 to 10.

// Log all the values from 1 to 10 using while loop


// log all the values from 1 to 10
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log(6);
console.log(7);
console.log(8);
console.log(9);
console.log(10);


// log all the even value from 1 to 10.

for (let i = 1 ; i < 10 ; i = i + 1){
    if ( i %2 == 0 ){
        console.log(i)
    }
}

// log all the odd value from 1 to 10.

for (let i = 1 ; i < 10 ; i = i + 1){
    if ( i %2 !== 0 ){
        console.log(i)
    }
}

// calculate all the number 1 to 10
let sum = 0;
for (let i = 1; i <= 10 ; i = i +1 ){
    sum = sum + i
}
console.log(sum);

// log all value 1 to 10

for (let i = 1; i = 10 ; i = i + 1){
    console.log(i)
}

