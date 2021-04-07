'use strict';

if (4 === 4) {
    console.log('Ok!');
} else {
    console.log('Error!');
}
/*
const num = 150;
(num === 50) ? console.log('Ok!') : console.log('Error!');
*/

const num = 50;

switch (num) {
    case 49:
        console.log('Error');
        break;
    case 200:
        console.log('Error');
        break;
    case 51:
        console.log('Ok!');
        break;
    default:
        console.log('No... No... No...');
        break;
}