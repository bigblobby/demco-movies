import React from 'react';
import Slider from "react-slick";
import {getMovieYear, isNotEmpty, formatDate, formatMoney, truncateString} from "../helper";
import {getMovieDetails, getSearchResults} from "../api";

export default class MovieInfo extends React.Component {

    constructor(){
        super();

        this.state = {
            loading: true,
            movie: {}
        };

        this.renderPersonCard = this.renderPersonCard.bind(this);
    }

    componentDidMount(){
        getMovieDetails(this.props.match.params.id)
            .then(result => {
                this.setState({movie: result.body, loading: false});
            });
    }

    componentDidUpdate(prevProps, prevState){
        if(prevProps.match.params.id !== this.props.match.params.id){
            this.setState({loading: true});
            getMovieDetails(this.props.match.params.id)
                .then(result => {
                    this.setState({movie: result.body, loading: false});
                });
        }
    }

    renderPersonCard(person){

        const {id, profile_path, name, character} = person;

        return (
            <div className="slide" key={id}>
                <div className="person-container">
                    <div className="poster">
                        <img src={profile_path ? ("http://image.tmdb.org/t/p/w185/" + profile_path) : '/images/person-placeholder.png'} alt={name}/>
                    </div>
                    <div className="person-info">
                        <p className="person-name">{truncateString(name, 15)}</p>
                        <p className="person-character">{truncateString(character, 15)}</p>
                    </div>
                </div>
            </div>
        );
    }

    render() {
        if(this.state.loading) {
            return (
                <div style={{height: 'calc(100vh - 76px)'}}
                     className="d-flex justify-content-center align-items-center">
                    <div className="spinner-border" role="status"
                         style={{height: '10rem', width: '10rem', color: '#9628a7'}}>
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            );
        } else {

            let image = "url('https://image.tmdb.org/t/p/original" + this.state.movie.backdrop_path + "')";
            const {title, poster_path, overview, budget, revenue, runtime, tagline, vote_average, vote_count, release_date, genres, credits} = this.state.movie;

            const slickSettings = {
                slidesToShow: 7,
                slidesToScroll: 6,
                infinite: false,
                responsive: [
                    {
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 6,
                            slidesToScroll: 5,
                        }
                    },
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 5,
                            slidesToScroll: 4,
                        }
                    },
                    {
                        breakpoint: 575,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 2
                        }
                    },
                    {
                        breakpoint: 350,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1
                        }
                    }
                ]
            };

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
                                            return <span key={genre.id}
                                                         className={"genre genre-" + genre.id}>{genre.name}</span>;
                                        })}
                                    </div>
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
                                    <h3>Plot</h3>
                                    <p className="grey-text copy-font-size">{overview}</p>
                                    <h3>Cast</h3>
                                    <Slider {...slickSettings}>
                                        {credits.cast.map(person => {
                                            return this.renderPersonCard(person);
                                        })}
                                    </Slider>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
}