import React, {Fragment} from "react";
import {sortByPopularity} from "../helper";
import MoviePreview from "./MoviePreview";
import {getSearchResults} from "../api";

export default class MainSearch extends React.Component {

    constructor(){
        super();

        this.state = {
            formFocused: false,
            searchValue: '',
            data: {}
        };

        // Bindings
        this.handleFocus = this.handleFocus.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.handleChange = this.handleChange.bind(this);
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

    handleFocus(){
        this.setState({formFocused: true})
    }

    handleBlur(e){
        // Clear out the search field when click off
        e.currentTarget.value = '';

        setTimeout(()=> this.setState({formFocused: false}), 110);
    }

    handleChange(e){
        this.setState({searchValue: e.target.value});
    }


    render(){
        return(
            <Fragment>
                <div className="search-container d-flex justify-content-center align-items-center p-2 p-lg-0">
                    <form className="search-form">
                        <div className={"search-form-wrapper d-flex align-items-center " + (this.state.formFocused ? "active " : " ")}>
                            <i className="fas fa-search"></i>
                            <input className="search" type="text" placeholder="Search for a movie or tv show . . ." onFocus={this.handleFocus} onBlur={this.handleBlur} onChange={this.handleChange}/>
                            <button className="search-button d-lg-none">GO</button>
                        </div>
                        <div className={"search-results d-none flex-column " + (this.state.formFocused ? "d-flex " : " ")}>
                            {this.state.data.results && this.state.data.results.map(movie => {
                                return <MoviePreview key={movie.id} movie={movie}/>;
                            })}
                        </div>
                    </form>
                </div>
            </Fragment>
        );
    }
}