// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.

const movies = require('./data');

// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(arr) {
  var allDirectors = arr.map(function (artists) {
    return artists['director'];
  });
  return allDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr) {
  var spielberg = arr.filter(function (stevenSpielberg) {
    return (
      stevenSpielberg.director == 'Steven Spielberg' &&
      stevenSpielberg.genre.includes('Drama')
    );
  });
  return spielberg.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(arr) {
  if (arr.length == 0) {
    return 0;
  } else {
    const sumScores = arr.reduce(function (sum, scores) {
      if (scores.score) {
        return sum + scores.score;
      } else {
        return sum;
      }
    }, 0);
    const avgScores = sumScores / arr.length;
    return Number(avgScores.toFixed(2));
  }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(arr) {
  var allDramaMovies = arr.filter((category) =>
    category.genre.includes('Drama')
  );
  if (allDramaMovies.length == 0) {
    return 0;
  } else {
    var sumDramaScores = allDramaMovies.reduce(function (sum, scores) {
      return sum + scores.score;
    }, 0);
    var avgDramaScores = sumDramaScores / allDramaMovies.length;
    return Number(avgDramaScores.toFixed(2));
  }
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {
  const ascOrder = arr.slice(0).sort(function (a, b) {
    if (a.year == b.year) {
      var titleA = a.title.toUpperCase(); // ignore upper and lowercase
      var titleB = b.title.toUpperCase(); // ignore upper and lowercase
      if (titleA < titleB) {
        return -1;
      }
      if (titleA > titleB) {
        return 1;
      }
    } else {
      return a.year - b.year;
    }
  });
  return ascOrder;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {
  const onlyTitles = arr.map((name) => name.title);
  const alphOrder = onlyTitles.sort();
  const topTwenty = alphOrder.slice(0, 20);
  return topTwenty;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(arr) {
  const allDurations = arr.slice(0, 3).map((x) => {
    console.log(x.duration);
    const hours = Number(x.duration.slice(0, 1)) * 60;
    const minutes = Number(x.duration.slice(3, 5));
    x.duration = hours + minutes;
    return x;
  });
  return allDurations;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg
  };
}
