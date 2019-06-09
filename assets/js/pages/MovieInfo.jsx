import React from 'react';
import {getMovieYear, isNotEmpty, formatDate, formatMoney} from "../helper";

export default class MovieInfo extends React.Component {

    constructor(){
        super();

        this.state = {
            movie: {}
        };
    }

    componentDidMount(){
        fetch('https://api.themoviedb.org/3/movie/' + this.props.match.params.id +'?api_key=c0f75ddddbf209af2c49e4af022e0468&language=en-GB')
            .then(data => data.json())
            .then(result => {
                this.setState({movie: result});
            });
    }

    render() {
        if(isNotEmpty(this.state.movie)){

            let image = "url('https://image.tmdb.org/t/p/original" + this.state.movie.backdrop_path +"')";

            const {title, poster_path, overview, budget, revenue, runtime, tagline, vote_average, vote_count, release_date, genres} = this.state.movie;

            return (
                <div className="movie-container">
                    <div className="movie-background-image" style={{backgroundImage: image}}>
                        <div className="container title-container">
                            <div className="row">
                                <div className="offset-md-3 col-md-9">
                                    <h1 className="movie-title">{title} <span className="release-date">{getMovieYear(this.state.movie)}</span></h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="movie-box">
                        <div className="container">
                            <div className="row">
                                <div className="movie-poster col-md-3">
                                    <img src={"http://image.tmdb.org/t/p/w342/" + poster_path} alt=""/>
                                </div>
                                <div className="movie-info col-md-9">
                                    <div className="genre-container">
                                        {genres.map(genre => {
                                            return <span className={"genre genre-" + genre.id}>{genre.name}</span>;
                                        })}
                                    </div>
                                    <div className="movie-details py-3">
                                        <span className="detail-container"><span className="detail-title">Released</span> <span className="detail-copy">{formatDate(release_date)}</span></span>
                                        <span className="detail-container"><span className="detail-title">Runtime</span> <span className="detail-copy">{runtime} mins</span></span>
                                        {!!budget && (<span className="detail-container"><span className="detail-title">Budget</span> <span className="detail-copy">{formatMoney(budget)}</span></span>)}
                                        {!!revenue && (<span className="detail-container"><span className="detail-title">Revenue</span> <span className="detail-copy">{formatMoney(revenue)}</span></span>)}
                                    </div>
                                    <p>{overview}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else {
           return 'Loading...';
        }
    }
}