import React from 'react';
import PropTypes from 'prop-types';
import {getMovieYear, truncateString} from "../helper";
import {Link} from 'react-router-dom';

export default class LargeMoviePreview extends React.Component {
    render() {
        const {id, title, poster_path, vote_average, overview} = this.props.movie;

        return (
            <Link to={{pathname: "/movie/" + id}} className="movie-card-large col-12 col-xl-6 p-3">
                <div className="row p-3">
                    <div className="image-container col-12 col-md-5 col-lg-3 col-xl-5 pl-0">
                        <img src={poster_path ? ("http://image.tmdb.org/t/p/w342/" + poster_path) : ''} alt={title + " movie poster"}/>
                    </div>
                    <div className="movie-copy col-12 col-md-7 col-lg-9 col-xl-7">
                        <div className="row">
                            <div className="col-12">
                                <p><span className="movie-title">{title}</span> <span className="movie-year">({getMovieYear(this.props.movie)})</span></p>
                                <p className="popularity">{vote_average}/10</p>
                                <p>{truncateString(overview, 200) } <span className="read-more">read more</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        );
    }
}

LargeMoviePreview.propTypes = {
    movie: PropTypes.object.isRequired
};