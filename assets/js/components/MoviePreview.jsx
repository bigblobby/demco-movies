import React from 'react';
import {getMovieYear} from "../helper";
import {Link} from 'react-router-dom';

export default class MoviePreview extends React.Component {
    render() {
        const {id, title, poster_path, vote_average} = this.props.movie;

        return (
            <Link to={{pathname: "/movie/" + id}} className="movie-card d-flex my-2 p-2">
                <div className="image-container">
                    <img src={poster_path ? ("http://image.tmdb.org/t/p/w185/" + poster_path) : ''} alt={title + " movie poster"}/> {/*TODO render placeholder poster if one isnt available*/}
                </div>
                <div className="movie-copy pl-2">
                    <p><span className="movie-title">{title}</span> <span className="movie-year">({getMovieYear(this.props.movie)})</span></p>
                    <p className="popularity">{vote_average}/10</p>
                </div>
            </Link>
        );
    }
}