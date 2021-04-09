'use strict';

/*function first() {
  //якісь дії
  setTimeout(function () {
    console.log('1');
  }, 500);
}

function second() {
  console.log('2');
}

first();
second();*/

function learnJS(lang, callback) {
  console.log(`Я вчу ${lang}`);
  callback();
}
learnJS('JavaScript', function () {
  console.log('Я вивчив цей урок!')
})

