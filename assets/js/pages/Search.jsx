import React from 'react';
import queryString from 'query-string';
import {getSearchResults} from "../api";
import LargeMoviePreview from "../components/LargeMoviePreview";

export default class Search extends React.Component {

    constructor(){
        super();

        this.state = {
            loading: true,
            searchValue: '',
            data: {}
        };
    }

    componentDidMount(){
        let query = queryString.parse(this.props.location.search);
        this.setState({searchValue: query.q}, () => {
            getSearchResults(this.state.searchValue)
                .then(result => {
                    this.setState({data: result.body, loading: false});
                });
        });
    }

    // componentDidUpdate(prevProps, prevState){
    //     if(prevState.searchValue !== this.state.searchValue){
    //         if(this.state.searchValue){
    //             getSearchResults(this.state.searchValue)
    //                 .then(result => {
    //                     this.setState({data: result.body});
    //                 });
    //         } else {
    //             this.setState({data: {}});
    //         }
    //     }
    // }


    render(){
        if(this.state.loading){
            return(
                <div style={{height: 'calc(100vh - 76px)'}}
                     className="d-flex justify-content-center align-items-center">
                    <div className="spinner-border" role="status"
                         style={{height: '10rem', width: '10rem', color: '#9628a7'}}>
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            );
        } else {
            return(
                <div className="search-page">
                    <div className="search-box d-flex justify-content-center">
                        <div className="search-wrapper px-3">
                            <i className="fas fa-search"></i>
                            <input className="search" type="text" placeholder="Search for a movie or tv show . . ." ref={this.searchBox} onChange={this.handleChange} onBlur={this.props.handleBlur}/>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="title col-12 my-5">
                                <h1>Search <i className="fas fa-chevron-right"></i> Results</h1>
                            </div>
                            <div className="search-results col-12">
                                <div className="row">
                                    {this.state.data.results && this.state.data.results.map(movie => {
                                        return <LargeMoviePreview movie={movie}/>;
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }
}