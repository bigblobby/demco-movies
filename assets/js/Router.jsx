import React from 'react';
import {BrowserRouter, NavLink, Route, Switch} from 'react-router-dom';
import Header from "./partials/Header";
import Discover from "./pages/Discover";
import Movies from "./pages/Movies";
import TV from "./pages/TV";
import Homepage from "./pages/Homepage";
import MovieInfo from "./pages/MovieInfo";

export default class Router extends React.Component {

    render() {
        return (
            <BrowserRouter>
                <Header/>
                <div id="content">
                    <Switch>
                        <Route path="/movie/:id" component={MovieInfo}/>
                        <Route exact path="/" component={Homepage}/>
                        <Route path="/discover" component={Discover}/>
                        <Route exact path="/movies" component={Movies}/>
                        <Route path="/tv-shows" component={TV}/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}