const input = require("fs").readFileSync("example.txt").toString().split("\n");

[n, ...arr] = input;
let startTime = [];
let endTime = [];
let count = 0;

const checkTime = (endEE) => {
  let minEndTime = 2147483648;
  let close = 0;

  for (let i = 0; i < n; i++) {
    if (startTime[i] > endEE && endTime[i] < minEndTime) {
      minEndTime = endTime[i];
      count++;
      saveIndex = i;
    } else if (startTime[i] < endEE) {
      close++;
    }

    if (close == n) {
      return -2;
    }
  }

  return minEndTime;
};

for (let i = 0; i < n; i++) {
  [start, end] = arr[i].split(" ");
  startTime[i] = Number(start);
  endTime[i] = Number(end);
}

let minTime = -1;
while (minTime != -2) {
  minTime = checkTime(minTime);
}

console.log(count);
