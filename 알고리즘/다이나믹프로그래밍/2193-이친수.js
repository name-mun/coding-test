const input = require("fs").readFileSync("example.txt").toString().trim();
n = Number(input);

let arr = [0, 1, 1];

for (let i = 3; i <= n; i++) {
  arr[i] = BigInt(arr[i - 1]) + BigInt(arr[i - 2]);
}

console.log(BigInt(arr[n]).toString());
