'use strict';


/*const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bgColor: 'red',
    },
    makeTest: function () {
        console.log('Test');
    }
};

console.log(options.name, ', ', options['name']);*/

/*delete options.name;

console.log(options.name, ', ', options.width);
console.log(options);*/


/*let counter = 0;

for (let key in options) {
    /!*if (typeof options[key] === 'object') {
        for (let i in options[key]) {
            console.log(`Властивість ${i} має значення ${options[key][i]}`);
            //counter++
        }
    } else {
        console.log(`Властивість ${key} має значення ${options[key]}`);
        counter++
    }*!/
    counter++
}
console.log(counter);*/

//console.log(Object.keys(options).length);
/*options.makeTest();

const {border, bgColor} = options.colors;
console.log(border, bgColor);*/

/*
function makeUserInfo(name, age) {
    return {
        name,
        age
    }
}
let user = makeUserInfo('Wasja', 30);
let user_1 = makeUserInfo('Oleg', 35);
console.log(user);
console.log(user_1);*/

/*let userInfo = {
    name: 'Василь'
}
//console.log(userInfo);

userInfo.age = 30;
//console.log(userInfo);

userInfo['likes javascript'] = true;
//console.log(userInfo);

userInfo.adress = {
    city: 'Uzhorod',
    street: 'Sadova'
};
//console.log(userInfo)

let user = Object.assign({}, userInfo);
user.age = 20;

console.log("об'єкт user ", user);
console.log("об'єкт userInfo ",userInfo);*/

/*
let userInfo = {
    name: 'Wasja',
    age: 30,
    adress: {
        city: 'Uzhorod',
        street: 'Sadova'
    },
    showInfo: function () {
        console.log(`${this.name}, ${this.age} років. Адреса: м. ${this.adress.city}, вул. ${this.adress.street}.`)
    }
  /!*  showInfo() {
    console.log(`${userInfo.name}, ${userInfo.age} років. Адреса: ${userInfo.adress.city}, вул. ${userInfo.adress.street}.`);
    }*!/
}
userInfo.showInfo();*/
//console.log("об'єкт userInfo ",userInfo);
//console.log('Властивість street: ', userInfo.adress.street);
//console.log(userInfo?.adress?.street);


/*if(userInfo.age) {
    console.log('Властивість age: ',userInfo.age);
} else {
    console.log('Нема такої властивості');
}*/


function UserInfo(name) {
    this.name = name;
    this.age = 30;
}
console.log(new UserInfo('Вася'));
console.log(new UserInfo('Лена'));