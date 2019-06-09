import React from "react";
import {NavLink} from 'react-router-dom';
import Nav from "./Nav";

export default class Header extends React.Component {

    constructor(){
        super();
    }

    render(){
        return(
            <header className="header">
                <div className="header-wrapper d-flex flex-wrap align-items-center">
                    <div className="logo-container pr-lg-3 mr-auto mr-lg-0">
                        <NavLink className="logo" to="/"><h1>DemCo</h1></NavLink>
                    </div>
                    <Nav/>
                </div>
            </header>
        );
    }
}