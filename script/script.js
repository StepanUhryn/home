'use strict';

let num = 50;

//Цикли 1.
/*
while (num <= 55) {
    console.log(num);
    num++;
}
*/
// Цикли 2
/*
do {
    console.log(num);
    num++;
}
while (num <= 55);*/

// Цикли 3

  for (let i = 1; i <= 10; i++) {
      if (i === 6) {
          //break;
          continue;
      }
      console.log(i);
  }