import React from "react";
import PropTypes from 'prop-types';
import HeroSearch from '../components/HeroSearch';
import {shuffle} from "../helper";
import {getHomepageBackgroundPoster, getSearchResults} from "../api";

type HomepageProps = {
    history: any,
    isMobile: boolean
}

type HomepageState = {
    heroPoster: string,
    searchValue: string,
    data: {}
}

export default class Homepage extends React.Component<HomepageProps, HomepageState> {

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
        getHomepageBackgroundPoster()
        .then(poster => this.setState({heroPoster: poster}));
    }

    componentDidUpdate(prevProps: HomepageProps, prevState: HomepageState){
        if(prevState.searchValue !== this.state.searchValue){
            if(this.state.searchValue){
                getSearchResults(this.state.searchValue)
                    .then(result => {
                        this.setState({data: result});
                    });
            } else {
                this.setState({data: {}});
            }
        }
    }

    handleChange(e: Event){
        var target = e.target;
        if (target instanceof HTMLInputElement) {
            this.setState({searchValue: target.value});
        }

    }

    handleSubmit(e: Event){
        e.preventDefault();
        this.props.history.push('/search?q=' + this.state.searchValue);
    }


    render(){
        let image = "url('" + this.state.heroPoster +"')";

        return(
            <div className="hero d-flex flex-column justify-content-center p-4" style={{backgroundImage: image}}>
                <h1 className="hero-heading text-center">Find and discover the latest and greatest movies.</h1>
                <h5 className="hero-sub-heading text-center">Search for your next favourite movie.</h5>
                <HeroSearch data={this.state.data} searchvalue={this.state.searchValue} isMobile={this.props.isMobile} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
            </div>
        );
    }
}

Homepage.propTypes = {
    isMobile: PropTypes.bool
};