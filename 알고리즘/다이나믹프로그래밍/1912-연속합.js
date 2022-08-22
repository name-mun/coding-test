const input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");

const n = +input[0];

let arr = input[1].split(" ");
let addArr = new Array(n).fill(0);

for (let i = 0; i < n; i++) {
  arr[i] = parseInt(arr[i]);
}

let solution = (num) => {
  addArr[num] = arr[num];
  for (let i = num + 1; i < n; i++) {
    arr2 = arr.slice(i + 1);
    if (arr2.length > 0) {
      if (arr[i] > 0 || Math.abs(arr[i]) < arr2.reduce((a, b) => a + b)) {
        addArr[num] += arr[i];
      } else {
        return i;
      }
    }
  }
};

start = solution(0);
for (let i = 1; i < n; i++) {
  if (i < start) {
    addArr[i] = addArr[i - 1] - arr[i - 1];
  } else if (i == start) {
    addArr[i] = arr[i];
  } else {
    start = solution(i);
  }
}

console.log(addArr.sort((a, b) => b - a)[0]);

// addArr.sort((a, b) => b - a)[0]
//addArr[i] 에서 다음 숫자를 더할지 유무
// 양수이면 그냥 더함
// 음수이면 그 다음 숫자들을 다 더했을 때 해당 수보다 크면 더함
