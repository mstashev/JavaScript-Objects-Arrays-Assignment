const imdb = require('imdb-api');







var favMovies = []

var movie1 = [
  title,
  director_list,
  genre,
  year,
  actor_list
]

var movie2 = [
  title,
  director_list,
  genre,
  year,
  actor_list
]

var movie3 = [
  title,
  director_list,
  genre,
  year,
  actor_list
]

var movie4 = [
  title,
  director_list,
  genre,
  year,
  actor_list
]

var movie5 = [
  title,
  director_list,
  genre,
  year,
  actor_list
]

function pushArray(array, array2){
  array.push.apply(array, array2)
}

for (i = 1; i < 6; ++i) {
  favMovies.pushArray(favMovies, ("movies" + i))
}






console.log(favMovies)
