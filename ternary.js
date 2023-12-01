var age = 5;

//Using if else
if (age >= 18) console.log("Adult");
else console.log("Child");

//Using ternary operator
var type = age >= 18 ? console.log("Adult") : console.log("Child");

//Nested ternary operator
var type =
  age >= 18
    ? console.log("Adult")
    : age < 10
    ? console.log("Kids")
    : console.log("Child");
