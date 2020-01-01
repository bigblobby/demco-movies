const superagent = require('superagent');
import {shuffle} from "./helper";

export function getHomepageBackgroundPoster(){
    return superagent.get('/api/background-poster')
        .then(response => JSON.parse(response.text))
        .then(result => shuffle(result.results))
        .then(data => 'https://image.tmdb.org/t/p/original' + data[0].backdrop_path);
}

export function getMovieDetails(id){
    return superagent.post('/api/movie-details')
        .send({'id': id})
        .then(response => JSON.parse(response.text));
}

export function getSearchResults(string){
    return superagent.post('/api/search')
        .send({'search': string})
        .then(response => JSON.parse(response.text));
}