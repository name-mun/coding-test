const input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");

[number, ...arr] = input;

number = Number(number);

const factorial = (n) => {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
};

for (let i = 0; i < number; i++) {
  arrr = arr[i].split(" ");
  n = parseInt(arrr[0]);
  m = parseInt(arrr[1]);
  console.log(Math.round(factorial(m) / (factorial(m - n) * factorial(n))));
}

// const fs = require("fs");
// const input = fs.readFileSync("example.txt").toString().trim().split("\n");
// const A = parseInt(input.shift()); // 첫번째 값 제거
// let num = 0;
// function factorial(num) {
//   if (num <= 1) return 1;
//   return num * factorial(num - 1);
// }
// for (let i = 0; i < A; i++) {
//   const arr = input[i].split(" ");
//   const N = parseInt(arr[0]);
//   const M = parseInt(arr[1]);
//   console.log(Math.round(factorial(M) / (factorial(M - N) * factorial(N))));
// }
