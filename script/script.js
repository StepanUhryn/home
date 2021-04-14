'use strict';

// Task 1

/*const userInfo = {
    name: 'Wasja',
    age: 40
}*/

// Task 2

/*let userInfo = {
    name: 'Wasja',
    age: 30,
    58: 'Значення властивості'
}
console.log(userInfo[58]);*/

// Task 3
/*

let userInfo = {
    name: 'Wasja',
    age: 30
}
let user = userInfo;
user.age = 45;
console.log(userInfo.age);
console.log(user.age);*/


// Task 4
/*

let userInfo = {
    name: 'Wasja',
    age: 30,
    showInfo() {
        console.log(`${this.name}`);
    }
}
let user = userInfo;
userInfo = null;
console.log(userInfo);
user.showInfo();*/

/*
// Task 5
let userInfo = {
    name: 'Wasja',
    age: 30
}
for (const key in userInfo) {
    const value = userInfo[key];
    console.log(value);
}
*/

//Task 6
/*

let userInfo = {
    name: 'Wasja',
    age: 40,
    adress: {
        city: 'Uzhorod'
    }
}
for (const key in userInfo.adress) {
    console.log(userInfo.adress[key]);
}*/


// Task 7
/*

const userInfo = {
    name: 'Wasja',
    age: 30,
    'likes js': true
}
console.log(userInfo['likes js']);*/


let dog = {};

dog.name = 'Spiky';
dog.age = 10;

console.log(dog);

dog.name = 'Liky';
console.log(dog);

delete dog.name;
console.log(dog);