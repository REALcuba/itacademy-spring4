// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result =  array.map(movie =>movie.director);
  // console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
 let result = array.filter(movie=> movie.director === director)
//  console.log("EXERCICE 2 ->", result);
 return result
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let directorMovies = array.filter(movie => movie.director === director);
  let average = directorMovies.reduce((acc, movie) => acc + movie.score, 0) / directorMovies.length;
  // console.log(average);
  return average
}

// Exercise 4:  Alphabetic order by title and return the first 20
function orderAlphabetically(array) {
  let result =  array.map(movie =>movie.title)
 result.sort()
  let firstTwenty= result.slice(0,20)
  // console.log(result);
  return firstTwenty;
}

// Exercise 5: Order by year, ascending
function orderByYear(arr) {
    // Extract the year and title properties and create a new array of objects
    const movieYearsAndTitles = arr.map(movie => ({ year: movie.year, title: movie.title }));
  
    // // Sort the array by year and title
    movieYearsAndTitles.sort((a, b) => {
      if (a.year === b.year) {
        return a.title.localeCompare(b.title);
      } else {
        return a.year - b.year;
      }
    });
    return movieYearsAndTitles;
  
}
// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, genre) {
  
  // should be rounded to 2 decimals places 
  // should not take into consideration films of other category
  // should return average even if one of the movies does not have score  

  // 
  const getMovieGenre = array.filter(movie => movie.genre.includes(genre) && movie.score>0);
    
    let averageScore = getMovieGenre.reduce((totalScore, movie) => {
  
  return  totalScore + movie.score
 }, 0) ;
  averageScore = Math.round((averageScore / getMovieGenre.length) *100)/100;
   console.log(Number(averageScore));
  
return averageScore
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
