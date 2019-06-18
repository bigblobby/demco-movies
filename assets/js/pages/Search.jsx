import React from 'react';
import queryString from 'query-string';
import {getSearchResults} from "../api";
import {isNotEmpty} from "../helper";
import LargeMoviePreview from "../components/LargeMoviePreview";

export default class Search extends React.Component {

    constructor(){
        super();

        this.state = {
            loading: true,
            searchValue: '',
            data: {}
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount(){
        // Scroll to top on page load
        window.scrollTo(0,0);

        let query = queryString.parse(this.props.location.search);
        this.setState({searchValue: query.q}, () => {
            getSearchResults(this.state.searchValue)
                .then(result => {
                    this.setState({data: result.body, loading: false});
                });
        });
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.history.push('/search?q=' + this.state.searchValue);
        if(this.state.searchValue){
            this.setState({loading: true}, () => {
                getSearchResults(this.state.searchValue)
                    .then(result => {
                        this.setState({data: result.body, loading: false});
                    });
            });
        } else {
            this.setState({data: {}});
        }
    }

    handleChange(e){
        this.setState({searchValue: e.target.value});
    }

    render(){
        return(
            <div className="search-page">
                <div className="search-box d-flex justify-content-center">
                    <div className="search-wrapper px-3">
                        <i className="fas fa-search"></i>
                        <form onSubmit={this.handleSubmit}>
                            <input className="search" type="text" placeholder="Search for a movie or tv show . . ." value={this.state.searchValue} onChange={this.handleChange} />
                        </form>
                    </div>
                </div>
                {this.state.loading ?
                    <div style={{height: 'calc(100vh - 76px)'}}
                         className="d-flex justify-content-center align-items-center">
                        <div className="spinner-border" role="status"
                             style={{height: '10rem', width: '10rem', color: '#9628a7'}}>
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                    :
                    <div className="container">
                        <div className="row">
                            <div className="title col-12 my-5">
                                <h1>Search <i className="fas fa-chevron-right"></i> Results</h1>
                            </div>
                            <div className="search-results col-12">
                                <div className="row">
                                    {isNotEmpty(this.state.data.results) ? this.state.data.results.map(movie => {
                                        return <LargeMoviePreview movie={movie}/>;
                                    })
                                    :
                                    <div>No Results</div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        );
    }
}