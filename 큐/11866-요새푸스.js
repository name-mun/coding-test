const input = require("fs").readFileSync("example.txt").toString().split(" ");
const n = parseInt(input[0]);
const k = parseInt(input[1]);

const result = [];

class Queue {
  constructor() {
    this.queue = [];
    this.head = 0;
    this.rear = 0;
  }

  push(value) {
    this.queue[this.rear++] = value;
  }

  change() {
    const value = this.queue[this.head];
    this.queue[this.head++] = null;
    this.queue[this.rear++] = value;
  }

  kill(num) {
    for (let i = 0; i < num - 1; i++) {
      this.change();
    }

    const value = this.queue[this.head];
    this.queue[this.head++] = null;
    return value;
  }
}

const queue = new Queue();

for (let i = 0; i < n; i++) {
  queue.push(i + 1);
}

for (let i = 0; i < n; i++) {
  result[i] = queue.kill(k);
}

const result2 = result.join(", ");
const output = "<" + result2 + ">";

console.log(output);
