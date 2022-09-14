const input = require("fs").readFileSync("example.txt").toString().trim();
number = Number(input.split(" ")[0]);
count = Number(input.split(" ")[1]);

let arr = [];
let memo = new Array(number);

let solution = (nowCount) => {
  if (nowCount == count) {
    console.log(arr.join(" "));
    return;
  }

  for (let i = 0; i < number; i++) {
    if (memo[i] !== 1) {
      memo[i] = 1;
      arr.push(i + 1);
      solution(nowCount + 1);
      arr.pop();
      memo[i] = 0;
    }
  }
};

solution(0);
