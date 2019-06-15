import React, {Fragment} from "react";
import {NavLink} from "react-router-dom"
import Nav from "./Nav";
import SearchOverlay from "../components/SearchOverlay";

export default class Header extends React.Component {

    constructor(){
        super();

        this.state = {
            searchOverlayOpen: false
        };

        this.handleOverlay = this.handleOverlay.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }

    handleOverlay(){
        console.log('test');
        this.setState(prevState => {
            return {searchOverlayOpen: !prevState.searchOverlayOpen};
        });
    }

    handleBlur(e){
        // Clear out the search field when click off
        e.currentTarget.value = '';

        setTimeout(()=> this.setState({searchOverlayOpen: false}), 110);
    }

    render(){
        return(
            <Fragment>
                <header className="header">
                    <div className="header-wrapper d-flex flex-wrap align-items-center">
                        <div className="logo-container pr-lg-3 mr-auto mr-lg-0">
                            <NavLink className="logo" to="/"><h1>DemCo</h1></NavLink>
                        </div>
                        <Nav isMobile={this.props.isMobile} handleOverlay={this.handleOverlay}/>
                    </div>
                </header>
                <SearchOverlay searchOverlayOpen={this.state.searchOverlayOpen} handleOverlay={this.handleOverlay} handleBlur={this.handleBlur}/>
            </Fragment>
        );
    }
}