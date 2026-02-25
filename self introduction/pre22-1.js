// Named Functions   


// Write a named function sumNumbers that takes two numbers and returns their sum.
// Test it with sumNumbers(5, 7) → should return 12.
 function company(a,b){
  return a+b;
 }
console.log( company(2,4));

// Create a named function isEven that checks if a number is even.
// Example: isEven(10) → true, isEven(7) → false.
function co(num){
    console.log(num %2==0?"true":"false");
    
}
co(4)
// Write a named function factorial that calculates the factorial of a number using recursion.
// Example: factorial(5) → 120.
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

// Example:
console.log(factorial(5)); // 120