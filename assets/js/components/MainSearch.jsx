import React, {Fragment} from "react";
import {sortByPopularity} from "../helper";
import MoviePreview from "./MoviePreview";

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
                fetch('https://api.themoviedb.org/3/search/movie?api_key=c0f75ddddbf209af2c49e4af022e0468&language=en-GB&query='+ this.state.searchValue +'&page=1&include_adult=false')
                    .then(data => data.json())
                    .then(result => {
                        this.setState({data: result});
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
                            <button className="search-button">GO</button>
                        </div>
                        <div className={"search-results d-none" + (this.state.formFocused ? "d-flex " : " ")}>
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