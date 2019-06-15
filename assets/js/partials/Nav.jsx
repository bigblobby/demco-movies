import React, {Fragment} from "react";
import {NavLink} from 'react-router-dom';

export default class Nav extends React.Component {

    constructor(){
        super();

        // State
        this.state = {
            mobile: null,
            navOpen: null
        };

        // Refs
        this.navigation = React.createRef();

        // Bindings
        this.handleResize = this.handleResize.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount(){
        window.addEventListener('resize', this.handleResize);
        this.handleResize();
    }

    componentWillUnmount(){
        window.addEventListener('resize', this.handleResize);
    }

    handleResize(){
        if(window.innerWidth < 992) {
            this.setState({mobile: true});
        } else {
            this.setState({mobile: false});
            this.navigation.current.style.height = null;
        }
    }

    handleClick(e){
        if(this.state.mobile){
            if(this.navigation.current.style.height){
                this.navigation.current.classList.remove('active');
                this.navigation.current.style.height = null;
            } else {
                this.navigation.current.classList.add('active');
                this.navigation.current.style.height = this.navigation.current.scrollHeight + 'px';

            }

        }
    }

    render(){
        return(
            <Fragment>
                <div className="menu-box d-block d-lg-none" onClick={this.handleClick}>
                    <div className="menu-line"></div>
                    <div className="menu-line"></div>
                    <div className="menu-line"></div>
                </div>
                <div className="navigation-container d-flex flex-column flex-lg-row justify-content-between align-items-center" ref={this.navigation}>
                    <nav className="navigation mb-3 mb-lg-0 mt-3 mt-lg-0">
                        <ul className="d-flex flex-column flex-lg-row">
                            <li><NavLink to="/discover">Discover</NavLink></li>
                            <li><NavLink to="/movies">Movies</NavLink></li>
                            <li><NavLink to="/tv-shows">TV</NavLink></li>
                            <li><a href="#" onClick={this.props.handleClickedSearch}>Search</a></li>
                        </ul>
                    </nav>
                    <div className="user-action-container">
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