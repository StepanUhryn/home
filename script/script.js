'use strict';

let numberOfFilms;


function start() {
  numberOfFilms = +prompt('Скільки фільмів Ви вже подивилися?', '');
  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('Скільки фільмів Ви вже подивилися?', '');
  }
}
start();

const personalMoviesDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

function rememberMyFilms() {
  if (personalMoviesDB.count < 10) {
    console.log('переглянуто досить мало фільмів.');
  } else if (personalMoviesDB.count >= 10 && personalMoviesDB.count < 30) {
    console.log('Ви класичний глядач.');
  }   else if (personalMoviesDB.count >= 30) {
    console.log('Ви кіноман!');
  }   else {
    console.log('Сталася помилка!');
  }
}
rememberMyFilms();


/*
for (let i = 0; i < 2; i++) {
  const a = prompt('Один з останніх переглянутих фільмів?',''),
      b = prompt('На скільки його оцінюєте?', '');
  if (a != null && b != null && a !== '' && b !== '' && a.length < 50) {
    personalMoviesDB.movies[a] = b;

  } else {
    console.log('error');
    i--;
  }

}
console.log(personalMoviesDB);

*/
