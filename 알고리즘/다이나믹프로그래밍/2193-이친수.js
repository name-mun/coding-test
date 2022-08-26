const input = require("fs").readFileSync("example.txt").toString().trim();

n = Number(input);

let arr = [
  [0, 0],
  [1, 0],
  [1, 0],
];

for (let i = 3; i <= n; i++) {
  arr[i] = [
    BigInt(arr[i - 1][0]) + BigInt(arr[i - 1][1]),
    BigInt(arr[i - 1][0]),
  ];
}

console.log((BigInt(arr[n][0]) + BigInt(arr[n][1])).toString());
