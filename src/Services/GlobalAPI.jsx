import axios from 'axios'

const movieBaseUrl = "https://api.themoviedb.org/3"
const api_key = "c9ec1a1ec96ff0cdff4dfd82106751a5"

const movieByGenreBaseURL =
  "https://api.themoviedb.org/3/discover/movie?api_key=" + api_key;

const getTrendingVideos = () =>
  axios.get(movieBaseUrl + "/trending/all/day?api_key=" + api_key);

const getMovieByGenreId = (id) =>
  axios.get(movieByGenreBaseURL + "&with_genres=" + id);

export default {
  getTrendingVideos,
  getMovieByGenreId
}