/*

// Function to print Fibonacci sequence up to n terms
function fibonacci(n) {
  let a = 0, b = 1;

  console.log("Fibonacci Sequence:");

  for (let i = 1; i <= n; i++) {
    console.log(a);   // print current term
    let next = a + b; // calculate next term
    a = b;            // move forward
    b = next;
  }
}

// Example: print first 10 terms
fibonacci(3);

*/

// Function to reverse a number
function reverseNumber(num) {
  let reversed = 0;

  while (num !== 0) {
    let digit = num % 10;              // get last digit
    reversed = reversed * 10 + digit;  // build reversed number
    num = Math.floor(num / 10);        // remove last digit
  }

  return reversed;
}

// Example
let number = 123;
console.log("Original Number:", number);
console.log("Reversed Number:", reverseNumber(number));
