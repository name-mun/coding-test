const input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");

const t = +input[0];

let add = (n) => {
  let d = new Array(10 + 1).fill(0);

  d[1] = 1;
  d[2] = 2;
  d[3] = 4;

  for (let i = 4; i <= 10; i++) {
    d[i] = d[i - 1] + d[i - 2] + d[i - 3];
  }
  return d[n];
};

let answer = "";

for (let i = 1; i <= t; i++) {
  answer += add(+input[i]) + "\n";
}

console.log(answer);
