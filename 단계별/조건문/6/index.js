let input = require("fs").readFileSync("example.txt").toString().split("\n");

let input2 = input[0].split(" ");
var hour = parseInt(input2[0]);
var minute = parseInt(input2[1]);
var time = parseInt(input[1]);

totalMinute = minute + time;

if (totalMinute >= 60) {
  hour = hour + parseInt(totalMinute / 60);
  totalMinute = parseInt(totalMinute % 60);
}

if (hour > 23) {
  hour -= 24;
}

console.log(hour, totalMinute);
