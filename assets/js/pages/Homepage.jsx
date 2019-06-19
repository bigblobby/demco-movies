import React from "react";
import MainSearch from '../components/MainSearch';
import {shuffle} from "../helper";
import {getHomepageBackgroundPoster, getSearchResults} from "../api";

export default class Homepage extends React.Component {

    constructor(){
        super();

        this.state = {
            heroPoster: '',
            searchValue: '',
            data: {}
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        let self = this;

        getHomepageBackgroundPoster()
        .then(function(result) {
            shuffle(result.body.results);
            self.setState({heroPoster: 'https://image.tmdb.org/t/p/original' + result.body.results[0].backdrop_path});
        });
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.searchValue !== this.state.searchValue){
            if(this.state.searchValue){
                getSearchResults(this.state.searchValue)
                    .then(result => {
                        this.setState({data: result.body});
                    });
            } else {
                this.setState({data: {}});
            }
        }
    }

    handleChange(e){
        this.setState({searchValue: e.target.value});
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.history.push('/search?q=' + this.state.searchValue);
    }


    render(){

        let image = "url('" + this.state.heroPoster +"')";

        return(
            <div className="hero d-flex flex-column justify-content-center p-4" style={{backgroundImage: image}}>
                <h1 className="hero-heading text-center">Find and discover the latest and greatest movies.</h1>
                <h5 className="hero-sub-heading text-center">Search for your next favourite movie.</h5>
                <MainSearch data={this.state.data} searchvalue={this.state.searchValue} isMobile={this.props.isMobile} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
            </div>
        );
    }
}