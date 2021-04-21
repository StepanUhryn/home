'use strict';

const personalMoviesDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function () {
    personalMoviesDB.count = +prompt('Скільки фільмів Ви вже подивилися?', '');

    while (personalMoviesDB.count == '' || personalMoviesDB.count == null || isNaN(personalMoviesDB.count)) {
      personalMoviesDB.count = +prompt('Скільки фільмів Ви вже подивилися?', '');
    }
  },
  rememberMyFilms: function () {
    for (let i = 0; i < 2; i++) {
      const a = prompt('Один з останніх переглянутих фільмів?', ''),
          b = prompt('На скільки його оцінюєте?', '');
      if (a != null && b != null && a !== '' && b !== '' && a.length < 50) {
        personalMoviesDB.movies[a] = b;
        console.log('done');
      } else {
        console.log('error');
        i--;
      }
    }
  },

  detectPersonalLevel: function () {
    if (personalMoviesDB.count < 10) {
      console.log('переглянуто досить мало фільмів.');
    } else if (personalMoviesDB.count >= 10 && personalMoviesDB.count < 30) {
      console.log('Ви класичний глядач.');
    } else if (personalMoviesDB.count >= 30) {
      console.log('Ви кіноман!');
    } else {
      console.log('Сталася помилка!');
    }
  },
  showMyDB: function (hidden) {
    if (!hidden) {
      console.log(personalMoviesDB);
    }
  },

  toggleVisibleMyDB: function () {
    if (personalMoviesDB.privat) {
      personalMoviesDB.privat = false;
    } else {
      personalMoviesDB.privat = true;
    }
  },

  writeYourGenres: function () {
    for (let i = 1; i <= 2; i++) {
      let genres = prompt(`Введіть Ваші любимі жанри через кому`);

      if (genres === '' || genres === null) {
        console.log('Введено некоректні дані');
        i--;
      } else {
        personalMoviesDB.genres = genres.split(', ');
        personalMoviesDB.genres.sort();
      }
    }

    personalMoviesDB.genres.forEach((item, i) => {
      console.log(`Ваш любимий жанр ${i + 1} - це ${item}`);
    });
  }
};



