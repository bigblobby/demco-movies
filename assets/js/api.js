const superagent = require('superagent');

export function getHomepageBackgroundPoster(){
    return superagent.get('https://api.themoviedb.org/3/movie/upcoming?api_key=c0f75ddddbf209af2c49e4af022e0468&language=en-US&page=1');
}

export function getMovieDetails(id){
    return superagent.get('https://api.themoviedb.org/3/movie/' + id +'?api_key=c0f75ddddbf209af2c49e4af022e0468&language=en-GB&append_to_response=credits');
}

export function getSearchResults(string){
    return superagent.get('https://api.themoviedb.org/3/search/movie?api_key=c0f75ddddbf209af2c49e4af022e0468&language=en-GB&query='+ string +'&page=1&include_adult=false');
}