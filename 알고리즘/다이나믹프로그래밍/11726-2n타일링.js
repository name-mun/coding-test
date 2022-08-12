const input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");

const n = +input[0];

let solution = (n) => {
  let d = new Array(1000).fill(0);

  d[1] = 1;
  d[2] = 2;

  for (let i = 3; i <= n; i++) {
    d[i] = (d[i - 1] + d[i - 2]) % 10007;
  }
  return d[n];
};

console.log(solution(n));
