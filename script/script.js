'use strict';


const numberOfFilms = +prompt('Скільки фільмів Ви вже подивилися?', '');


const personalMoviesDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
if (personalMoviesDB.count < 10) {
    console.log('переглянуто досить мало фільмів.');
} else if (personalMoviesDB.count >= 10 && personalMoviesDB.count < 30) {
    console.log('Ви класичний глядач.');
}   else if (personalMoviesDB.count >= 30) {
    console.log('Ви кіноман!');
}   else {
        console.log('Сталася помилка!');
}

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


