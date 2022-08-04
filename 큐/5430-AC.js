const input = require("fs").readFileSync("example.txt").toString().split("\n");
const t = parseInt(input[0]);
const p = [];
const n = [];
result = 0;

class Queue {
  constructor() {
    this.queue = [];
    this.head = 0;
    this.rear = 0;
  }

  push(value) {
    this.queue[this.rear++] = value;
  }

  empty() {
    return this.rear - this.head === 0 ? 1 : 0;
  }

  r(len) {
    for (let aa = 0; aa < parseInt(len / 2); aa++) {
      let temp = this.queue[len - aa - 1];
      this.queue[len - aa - 1] = this.queue[aa];
      this.queue[aa] = temp;
    }
    return this.queue;
  }

  d() {
    if (this.queue.length == 0) return "error";
    const value = this.queue[this.head];
    this.queue[this.head++] = null;
    let aaa = this.queue.slice(this.head);
    this.queue = aaa;
    this.head = 0;

    return this.queue;
  }
}

for (let i = 1; i < t + 1; i++) {
  p[i - 1] = input[i * 3 - 2];
  n[i - 1] = parseInt(input[i * 3 - 1]);
}

for (let i = 0; i < t; i++) {
  const queue = new Queue();

  arr = input[(i + 1) * 3];
  arr2 = arr.split(/,|\[|\]/);
  for (let a = 0; a < arr2.length; a++) {
    if (arr2[a] != "") {
      queue.push(parseInt(arr2[a]));
    }
  }

  p2 = p[i].split("");
  len = p2.length;

  if (len > 0) {
    for (let j = 0; j < p2.length; j++) {
      if (p2[j] == "R") {
        result = queue.r(n[i]);
      } else {
        result = queue.d();
      }
    }
  }
  console.log(result);
}
