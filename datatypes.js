"use strict";
var _a;
let id = 10;
console.log(id);
let fullName = 'Venu Gopal Madharam';
console.log(fullName.slice(3, 8));
let numbers;
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(numbers.reduce((a, b) => a + b));
let isValid = false;
console.log(isValid);
if (!isValid) {
    console.log(!isValid);
}
let names = ['Venu', 'Gopal', 'Madharam'];
console.log(names.reduce((a, b) => a + b));
console.log(((_a = names.find((x) => x === "Ven")) === null || _a === void 0 ? void 0 : _a.length) != undefined);
console.log(1 /* Color.Green */);
let calculator;
function swapNumbers(x, y) {
    return [x + y, x - y, x * y, x / y, 'Success'];
}
;
calculator = swapNumbers(10, 20);
console.log(calculator);
