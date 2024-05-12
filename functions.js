"use strict";
function add(a, b, c, d = 10) {
    return a + b + (c !== null && c !== void 0 ? c : 0) + d;
}
let sum = add(10, 20);
console.log(sum);
sum = add(10, 20, 30);
console.log(sum);
sum = add(10, 20, 30, 40);
console.log(sum);
const sub = (a, b) => a - b;
console.log(sub(6, 3));
