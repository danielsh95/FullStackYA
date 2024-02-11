const axios = require("axios")
const jsonfile = require("jsonfile")
let path_movies = "movies.json"
const URL_TVMAZE = "https://api.tvmaze.com/shows"

async function findMovies() {
    
    const jsonMovies = await jsonfile.readFile(path_movies)
    const {data: moviesData} = await axios.get(URL_TVMAZE)
    let listMovies = []
    
    jsonMovies.movies.forEach(movie => {
       let dataOfMovie = moviesData.find(m => m.name == movie)
       listMovies.push({"name": movie, "premiered": dataOfMovie.premiered})
    })
    jsonMovies.movies = listMovies;
    jsonfile.writeFile(path_movies, jsonMovies);
}




module.exports = {findMovies}