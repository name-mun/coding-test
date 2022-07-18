let input = require("fs").readFileSync("example.txt").toString().split("\n");

let n = parseInt(input);

let conMin = 1000000;
let sum = 0;
let numArray = [];

const cons = (num) => {
  sum = num;
  num = String(num);
  numArray = num.split("");

  for (let i = 0; i < numArray.length; i++) {
    addN = parseInt(numArray[i]);
    sum += addN;
  }
  if (sum == n) {
    return num;
  } else {
    return 0;
  }
};

for (let i = 0; i < n; i++) {
  result = cons(i);
  if (result != 0 && result < conMin) {
    conMin = result;
  }
}

if (conMin == 1000000) {
  return 0;
} else {
  console.log(conMin);
}
