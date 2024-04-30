function factorialIterative(n) {
  if (n < 0) {
      return "Error: Factorial is not defined for negative numbers";
  }
  let result = 1;
  for (let i = 1; i <= n; i++) {
      result *= i;
  }
  return result;
}

let start = performance.now();
factorialIterative(6000);  // Replace 10 with the number you want to calculate the factorial of
let end = performance.now();
console.log("Time taken by iterative function: " + (end - start)*1000 + " miiliseconds");




// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



function factorialRecursive(n) {
  if (n < 0) {
      return "Error: Factorial is not defined for negative numbers";
  } else if (n === 0 || n === 1) {
      return 1;
  } else {
      return n * factorialRecursive(n - 1);
  }
}

start = performance.now();
factorialRecursive(6000);  // Replace 10 with the number you want to calculate the factorial of
end = performance.now();
console.log("Time taken by recursive function: " + (end - start)*1000 + " microseconds");

