const input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");

[n, ...arr] = input;
arr = arr.map((i) => Number(i));
n = Number(n);
let memo = new Array(n);

let solution = (num, memo) => {
  memo[0] = 1;
  memo[1] = 1;
  memo[2] = 1;
  memo[3] = 2;
  memo[4] = 2;

  for (let i = 5; i < num; i++) {
    memo[i] = memo[i - 1] + memo[i - 5];
  }

  console.log(memo[num - 1]);
};

for (let i = 0; i < n; i++) {
  solution(arr[i], memo);
}
