import React from 'react';
import queryString from 'query-string';
import {getSearchResults} from "../api";
import {isNotEmpty} from "../helper";
import LargeMoviePreview from "../components/LargeMoviePreview";
import Loading from "../components/Loading";

export default class Search extends React.Component {

    constructor(){
        super();

        this.state = {
            loading: true,
            searchValue: '',
            data: {}
        };

        this.fetchSearchResults = this.fetchSearchResults.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount(){
        // Scroll to top on page load
        window.scrollTo(0,0);

        let query = queryString.parse(this.props.location.search);
        this.setState({searchValue: query.q}, () => {
            this.fetchSearchResults();
        });
    }

    fetchSearchResults(){
        getSearchResults(this.state.searchValue)
            .then(result => {
                this.setState({data: result, loading: false});
            });
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.history.push('/search?q=' + this.state.searchValue);
        if(this.state.searchValue){
            this.setState({loading: true}, () => {
                this.fetchSearchResults();
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
                    <Loading/>
                    :
                    <div className="container">
                        <div className="row">
                            <div className="title col-12 my-5">
                                <h1>Search <i className="fas fa-chevron-right"></i> Results</h1>
                            </div>
                            <div className="search-results col-12">
                                <div className="row">
                                    {isNotEmpty(this.state.data.results) ? this.state.data.results.map(movie => {
                                        return <LargeMoviePreview key={movie.id} movie={movie}/>;
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