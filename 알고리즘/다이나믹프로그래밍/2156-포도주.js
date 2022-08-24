const input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");

[n, ...arr] = input;
arr = arr.map((i) => Number(i));
n = Number(n);
let memo = new Array(n);

let solution = (n, arr, memo) => {
  memo[0] = arr[0];
  memo[1] = Math.max(arr[0] + arr[1], arr[1]);
  memo[2] = Math.max(memo[0] + arr[2], arr[1] + arr[2], memo[1]);

  for (let i = 3; i < n; i++) {
    memo[i] = Math.max(memo[i - 3] + arr[i - 1] + arr[i], memo[i - 2] + arr[i]);
    memo[i] = Math.max(memo[i - 1], memo[i]);
  }
  console.log(memo[n - 1]);
};

solution(n, arr, memo);
