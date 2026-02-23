import axios from 'axios'

const movieBaseUrl = "https://api.themoviedb.org/3"
const api_key = "c9ec1a1ec96ff0cdff4dfd82106751a5"

const getTrendingVideos = () => {
    return axios.get(
        `${movieBaseUrl}/trending/all/day?api_key=${api_key}`
    );
}

export default {
    getTrendingVideos
}