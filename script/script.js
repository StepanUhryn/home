const numberOfFilms = +prompt('Скільки фільмів Ви вже подивилися?', '');
console.log(numberOfFilms, typeof(numberOfFilms));

const personalMoviesDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

console.log(personalMoviesDB.count);
console.log(personalMoviesDB['count'])


const a = prompt('Один з останніх переглянутих фільмів?',''),
      b = prompt('На скільки його оцінюєте?', ''),
      c = prompt('Один з останніх переглянутих фільмів?',''),
      d = prompt('На скільки його оцінюєте?', '');

personalMoviesDB.movies[a] = b;
personalMoviesDB.movies[c] = d;

console.log(personalMoviesDB);