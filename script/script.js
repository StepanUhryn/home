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


function  estimationMyFilms() {
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
}

estimationMyFilms();



function showMyDB (hidden) {
   if (!hidden) {
     console.log(personalMoviesDB);
   }

}
showMyDB(personalMoviesDB.privat);

function writeYourGenres () {
  for (let i = 1; i <= 3; i++) {
   personalMoviesDB.genres[i-1] = prompt(`Ваш любимий жанр за номером ${i}`);
  }
}
writeYourGenres();
