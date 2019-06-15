import React from "react";
import MainSearch from '../components/MainSearch';
import {shuffle} from "../helper";
import {getHomepageBackgroundPoster} from "../api";

export default class Homepage extends React.Component {

    constructor(){
        super();

        this.state = {
            heroPoster: ''
        }
    }

    componentDidMount(){
        let self = this;

        getHomepageBackgroundPoster()
        .then(function(result) {
            shuffle(result.body.results);
            self.setState({heroPoster: 'https://image.tmdb.org/t/p/original' + result.body.results[0].backdrop_path});
        });
    }


    render(){

        let image = "url('" + this.state.heroPoster +"')";

        return(
            <div className="hero d-flex flex-column justify-content-center" style={{backgroundImage: image}}>
                <h1 className="hero-heading text-center">Find and discover the latest and greatest movies.</h1>
                <h5 className="hero-sub-heading text-center">Search for your next favourite movie.</h5>
                <MainSearch/>
            </div>
        );
    }
}