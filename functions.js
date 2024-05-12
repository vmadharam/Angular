"use strict";
function add(a, b, c, d = 10, ...e) {
    return a + b + (c !== null && c !== void 0 ? c : 0) + d + (e.length > 0 ? e.reduce((a, b) => a + b) : 0);
}
let sum = add(10, 20);
console.log(sum);
sum = add(10, 20, 30);
console.log(sum);
sum = add(10, 20, 30, 40);
console.log(sum);
sum = add(10, 20, 30, 40, 10, 10, 10);
console.log(sum);
const sub = (a, b) => a - b;
console.log(sub(6, 3));
