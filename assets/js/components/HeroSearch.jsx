import React, {Fragment} from "react";
import PropTypes from 'prop-types';
import SmallMoviePreview from "./SmallMoviePreview";

export default class HeroSearch extends React.Component {

    constructor(){
        super();

        this.state = {
            formFocused: false,
        };

        // Bindings
        this.handleFocus = this.handleFocus.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }

    handleFocus(){
        this.setState({formFocused: true})
    }

    handleBlur(e){
        // Clear out the search field when click off
        e.currentTarget.value = '';

        setTimeout(()=> this.setState({formFocused: false}), 150);
    }

    render(){
        return(
            <Fragment>
                <div className="search-container d-flex justify-content-center align-items-center p-2 p-lg-0">
                    <form className="search-form" onSubmit={this.props.handleSubmit}>
                        <div className={"search-form-wrapper d-flex align-items-center " + (this.state.formFocused ? "active " : " ")}>
                            <i className="fas fa-search"></i>
                            <input className="search" type="text" placeholder={this.props.isMobile ? "Search . . ." : "Search for a movie or tv show . . ."} onFocus={this.handleFocus} onBlur={this.handleBlur} onChange={this.props.handleChange}/>
                            <button className="search-button d-lg-none">GO</button>
                        </div>
                        <div className={"search-results d-none flex-column " + (this.state.formFocused ? "d-flex " : " ")}>
                            {this.props.data.results && this.props.data.results.map(movie => {
                                return <SmallMoviePreview key={movie.id} movie={movie}/>;
                            })}
                        </div>
                    </form>
                </div>
            </Fragment>
        );
    }
}

HeroSearch.propTypes = {
    data: PropTypes.object,
    handleChange: PropTypes.func,
    handleSubmit: PropTypes.func,
    isMobile: PropTypes.bool,
    searchValue: PropTypes.string
};