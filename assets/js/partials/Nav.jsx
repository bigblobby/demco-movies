import React, {Fragment} from "react";
import {NavLink} from 'react-router-dom';

export default class Nav extends React.Component {

    constructor(){
        super();

        // State
        this.state = {
            navOpen: null
        };

        // Refs
        this.navigation = React.createRef();

        // Bindings
        this.handleClick = this.handleClick.bind(this);
        this.handleSearchClick = this.handleSearchClick.bind(this);
    }

    handleClick(){
        if(this.props.isMobile){
            if(this.navigation.current.style.height){
                this.navigation.current.style.height = null;
                this.setState({navOpen: false})
            } else {
                this.navigation.current.style.height = this.navigation.current.scrollHeight + 16 + 'px';
                this.setState({navOpen: true})
            }

        }
    }

    handleSearchClick(){
        this.props.handleOverlay();
        this.handleClick();
    }

    render(){
        return(
            <Fragment>
                <div className="menu-box d-block d-lg-none" onClick={this.handleClick}>
                    <div className="menu-line"></div>
                    <div className="menu-line"></div>
                    <div className="menu-line"></div>
                </div>
                <div className={"navigation-container d-flex flex-column flex-lg-row justify-content-between align-items-center"} ref={this.navigation}>
                    <nav className="navigation mb-3 mb-lg-0 mt-3 mt-lg-0">
                        <ul className="d-flex flex-column flex-lg-row">
                            <li><NavLink to="/discover">Discover</NavLink></li>
                            <li><NavLink to="/movies">Movies</NavLink></li>
                            <li><NavLink to="/tv-shows">TV</NavLink></li>
                            <li><a href="#" onClick={this.handleSearchClick}>Search</a></li>
                        </ul>
                    </nav>
                    <div className="user-action-container mb-3 mb-lg-0">
                        <ul className="d-flex align-items-center justify-content-center justify-content-lg-start">
                            <li className="login mr-3"><a href="#">Log in</a></li>
                            <li className="sign-up"><a href="#">Sign Up</a></li>
                        </ul>
                    </div>
                </div>
            </Fragment>
        );
    }
}