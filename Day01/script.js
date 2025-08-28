// Prime number check with user input

let num = parseInt(prompt("Enter a number: "));

let isPrime = true;

if (num <= 1) {
  isPrime = false; // 0 and 1 are not prime
} else {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }
}

if (isPrime) {
  console.log(num + " is a Prime number");
  alert(num + " is a Prime number");
} else {
  console.log(num + " is NOT a Prime number");
  alert(num + " is NOT a Prime number");
}


/*
// Factorial using loop
let num = parseInt(prompt("Enter a number: "));
let fact = 1;

for (let i = 1; i <= num; i++) {
  fact *= i;
}

console.log("Factorial of " + num + " is: " + fact);
alert("Factorial of " + num + " is: " + fact);

*/



/*

// Factorial using recursion
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1; // base case
  } else {
    return n * factorial(n - 1); // recursive step
  }
}

let num = parseInt(prompt("Enter a number: "));
console.log("Factorial of " + num + " is: " + factorial(num));
alert("Factorial of " + num + " is: " + factorial(num));



*/