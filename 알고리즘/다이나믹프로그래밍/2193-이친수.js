const input = require("fs").readFileSync("example.txt").toString().trim();
n = Number(input);

let arr = [
  [0, 0],
  [1, 0],
  [1, 0],
];

for (let i = 3; i <= n; i++) {
  zero = arr[i - 1][0] + arr[i - 1][1];
  one = arr[i - 1][0];
  arr[i] = [zero, one];
}

console.log(arr[n][0] + arr[n][1]);
