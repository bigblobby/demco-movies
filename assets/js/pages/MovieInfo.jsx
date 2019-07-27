import React from 'react';
import {getMovieYear, formatDate, formatMoney, truncateString} from "../helper";
import {getMovieDetails} from "../api";
import Loading from "../components/Loading";
import {castSettings} from "../carousel-settings";
import Carousel from '../components/Carousel';
import ActorCard from '../components/ActorCard';
import MovieInfoDetails from '../components/MovieInfoDetails';

export default class MovieInfo extends React.Component {

    constructor(){
        super();

        this.state = {
            loading: true,
            movie: {}
        };

        this.renderMovieDetails = this.renderMovieDetails.bind(this);
        this.fetchMovieDetails = this.fetchMovieDetails.bind(this);
    }

    componentDidMount(){
        // Scroll to top on page load
        window.scrollTo(0,0);

        this.fetchMovieDetails();
    }

    componentDidUpdate(prevProps, prevState){
        if(prevProps.match.params.id !== this.props.match.params.id){
            this.setState({loading: true});
            this.fetchMovieDetails();
        }
    }

    fetchMovieDetails(){
        getMovieDetails(this.props.match.params.id)
            .then(result => this.setState({movie: result, loading: false}));
    }

    renderMovieDetails(){
        const { release_date, budget, runtime, revenue } = this.state.movie;

        return(
            <div className="movie-details pb-3 pt-2">
                <div className="detail-container"><span className="detail-title">Released </span><span className="detail-copy">{formatDate(release_date)}</span></div>
                <div className="detail-container"><span className="detail-title">Runtime </span><span className="detail-copy">{runtime} mins</span></div>
                {!!budget && (<div className="detail-container"><span
                    className="detail-title">Budget</span> <span
                    className="detail-copy">{formatMoney(budget)}</span></div>)}
                {!!revenue && (<div className="detail-container"><span
                    className="detail-title">Revenue</span> <span
                    className="detail-copy">{formatMoney(revenue)}</span></div>)}
            </div>
        );
    }

    render() {
        if(this.state.loading) {
            return (
                <Loading/>
            );
        } else {

            let image = "url('https://image.tmdb.org/t/p/original" + this.state.movie.backdrop_path + "')";
            const {title, poster_path, overview, tagline, vote_average, vote_count, genres, credits} = this.state.movie;

            return (
                <div className="movie-container">
                    <div className="movie-background-image" style={{backgroundImage: image}}>
                        <div className="container title-container">
                            <div className="row">
                                <div className="offset-md-3 col-md-9">
                                    <h1 className="movie-title">{title} <span
                                        className="release-date">{getMovieYear(this.state.movie)}</span></h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="movie-box">
                        <div className="container">
                            <div className="row">
                                <div className="movie-poster col-md-3">
                                    <img src={"http://image.tmdb.org/t/p/w342/" + poster_path} alt=""/>
                                    <div className="row mt-3">
                                        <div className="col-12">
                                            <button className="watchlist-button">Watchlist +</button>
                                        </div>
                                        {/*<div className="col-4">*/}
                                        {/*<button className="heart-button d-flex justify-content-center"><i className="far fa-heart"></i></button>*/}
                                        {/*</div>*/}
                                    </div>
                                </div>
                                <div className="movie-info col-md-9">
                                    <div className="genre-container">
                                        {genres.map(genre => {
                                            return <span key={genre.id} className={"genre genre-" + genre.id}>{genre.name}</span>;
                                        })}
                                    </div>
                                    <MovieInfoDetails movie={this.state.movie}/>
                                    <h3>Plot</h3>
                                    <p className="grey-text copy-font-size">{overview}</p>
                                    <h3>Cast</h3>
                                    <Carousel settings={castSettings}>
                                        {credits.cast.map(person => {
                                            return <ActorCard key={person.id} {...person}/>;
                                        })}
                                    </Carousel>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
}