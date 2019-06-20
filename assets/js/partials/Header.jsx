import React, {Fragment} from "react";
import {NavLink} from "react-router-dom"
import Nav from "./Nav";
import SearchOverlay from "../components/SearchOverlay";
import PropTypes from 'prop-types';

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
        this.setState(prevState => {
            return {searchOverlayOpen: !prevState.searchOverlayOpen}
        });
    }

    handleBlur(){
        setTimeout(()=> this.setState({searchOverlayOpen: false}), 150);
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

Header.propTypes = {
    isMobile: PropTypes.bool
};