"use strict";
//Write a program that checks if the given number is  divisible by 3 or 5
//or both or not divisible by anyone show output accordingly
var number = 8;
if (number % 3 == 0 && number % 5 == 0) {
    console.log("The number is divisible by both 3 and 5");
}
else if (number % 3 == 0) {
    console.log("The number is divisible by 3");
}
else if (number % 5 == 0) {
    console.log("The number is divisible by 5");
}
else {
    console.log("The number is not divisible by 3 and 5");
}
