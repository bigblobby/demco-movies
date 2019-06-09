import React from "react";
import MainSearch from '../components/MainSearch';
import {shuffle} from "../helper";

export default class Homepage extends React.Component {

    constructor(){
        super();

        this.state = {
            heroPoster: ''
        }
    }

    componentDidMount(){
        fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=c0f75ddddbf209af2c49e4af022e0468&language=en-US&page=1')
            .then(data => data.json())
            .then(res => {
                shuffle(res.results);
                console.log(res.results);
                this.setState({heroPoster: 'https://image.tmdb.org/t/p/original' + res.results[0].backdrop_path});
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