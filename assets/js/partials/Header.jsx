import React, {Fragment} from "react";
import {NavLink} from "react-router-dom"
import Nav from "./Nav";
import SearchOverlay from "../components/SearchOverlay";

export default class Header extends React.Component {

    constructor(){
        super();

        this.state = {
            searchToggled: false
        };

        this.handleClickedSearch = this.handleClickedSearch.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }

    handleClickedSearch(){
        this.setState(prevState => {
            return {searchToggled: !prevState.searchToggled};
        });
    }

    handleClose(){
        this.setState(prevState => {
            return {searchToggled: !prevState.searchToggled};
        });
    }

    handleBlur(e){
        // Clear out the search field when click off
        e.currentTarget.value = '';

        setTimeout(()=> this.setState({searchToggled: false}), 110);
    }

    render(){
        return(
            <Fragment>
                <header className="header">
                    <div className="header-wrapper d-flex flex-wrap align-items-center">
                        <div className="logo-container pr-lg-3 mr-auto mr-lg-0">
                            <NavLink className="logo" to="/"><h1>DemCo</h1></NavLink>
                        </div>
                        <Nav handleClickedSearch={this.handleClickedSearch}/>
                    </div>
                </header>
                <SearchOverlay searchToggled={this.state.searchToggled} handleClose={this.handleClose} handleBlur={this.handleBlur}/>
            </Fragment>
        );
    }
}