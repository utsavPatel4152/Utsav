var markHeight, markMass, johnHeight, johnMass, BMIMark, BMIJohn;

markHeight = prompt("Enter Height of Mark");
markMass = prompt("Enter Mass of Mark");
johnHeight = prompt("Enter Height of John");
johnMass = prompt("Enter Mass of John");

BMIMark = markMass / markHeight^2;
BMIJohn = johnMass / johnHeight^2;

var HigherBMI = BMIMark > BMIJohn;
console.log("Is Mark's BMI higher than John's? "+ HigherBMI);