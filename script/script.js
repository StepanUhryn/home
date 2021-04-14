'use strict';

/*
let number = Math.round(5.845*100)/100;
console.log(number, typeof number);

let num = +number.toFixed(2);
console.log(num, typeof num);*/
/*

console.log(number.toFixed(1), typeof number);
console.log(number.toFixed(2), typeof number);
*/

/*
console.log(+number.toFixed(1), typeof number);
console.log(+number.toFixed(2), typeof number);
*/

let num = 1.005 + Number.EPSILON;
let num_1 = Math.round(num*100)/100;
console.log(num_1);

console.log(num*100);
console.log(Math.round(num*100));
