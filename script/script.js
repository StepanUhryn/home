'use strict'

/*
let arr = ['Wasil', 'Іштван', 'Оля'];
let newArr = arr;
newArr.push("Петя");
console.log(arr, arr.length)
*/


/*const users = ['Ваня', 'Іштван'];
//console.log(users);
users.push('Оля');
//console.log(users);
/!*users[1] = 'Петя';
console.log(users);*!/

for (let item of users) {
        console.log(item);
        if (item === 'Іштван') {
            users.item = 'Петя';
            console.log(item);
        } else {
            console.log('Не Іштван');
        }
    }
console.log(users);*/

/*const users = ['Ваня', 'Іштван', 'Оля'];
console.log(users);*/

/*for (let i = 0; i < users.length; i++) {
    if (users[i] === 'Іштван') {   //якщо значання елемента Іштван
        users[i] = 'Петя'; // то замінюю його на Петю
    } else {

    }
    console.log(users[i]);
}
console.log(users);*/

/*users.shift();
console.log(users);

users.unshift('Маша', 'Паша');
console.log(users);*/

/*let arr = ['Ваня', 'Іштван', 'Оля'];
console.log('початковий масив', arr);

let pos = arr.indexOf('Іштван');
console.log(`індекс елемента Іштван: ${pos}`);
let arrRemoved = arr.splice(pos, 1);

console.log('змінений масив ', arrRemoved);
console.log(arr);*/


/*let str = 'Ваня, Вітя, Едік';
let strMassiv = str.split(', ');
console.log(strMassiv);*/

let arr = [9, 2, 8];
let reduceValue = arr.reduce(function (previousValue, item, index, array) {
    console.log(previousValue);
})
