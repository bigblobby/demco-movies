import React from "react";
import PropTypes from 'prop-types';
import SmallMoviePreview from "./SmallMoviePreview";
import {getSearchResults} from "../api";
import {Provider} from 'react';

export default class SearchOverlay extends React.Component {

    constructor(){
        super();

        this.state = {
            searchValue: '',
            data: {}
        };

        this.handleChange = this.handleChange.bind(this);

        this.searchBox = React.createRef();
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

        // Focus the input field when 'search' is clicked
        this.searchBox.current.focus();
    }

    handleChange(e){
        this.setState({searchValue: e.target.value});
    }


    render(){
        return(
            <div className={"search-overlay " + (this.props.searchOverlayOpen ? 'active ': '')}>
                <div className="search-overlay-inner d-flex justify-content-center">
                    <form className="search-form">
                        <div className={"search-form-wrapper d-flex align-items-center "}>
                            <i className="fas fa-search"></i>
                            <input className="search" type="text" placeholder="Search for a movie or tv show . . ." ref={this.searchBox} onChange={this.handleChange} onBlur={this.props.handleBlur}/>
                        </div>
                        <div className={"search-results d-flex flex-column"}>
                            {this.state.data.results && this.state.data.results.map(movie => {
                                return <SmallMoviePreview key={movie.id} movie={movie}/>;
                            })}
                        </div>
                    </form>
                    <div className="close-button" onClick={this.props.handleOverlay}>
                        <i className="fas fa-times"></i>
                    </div>
                </div>
            </div>
        );
    }
}

SearchOverlay.propTypes = {
    handleBlur: PropTypes.func,
    handleOverlay: PropTypes.func,
    searchOverlayOpen: PropTypes.bool
};