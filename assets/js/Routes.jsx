import React from 'react';
import {BrowserRouter, NavLink, Route, Switch} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import Header from "./partials/Header";
import Discover from "./pages/Discover";
import Movies from "./pages/Movies";
import TV from "./pages/TV";
import Homepage from "./pages/Homepage";
import MovieInfo from "./pages/MovieInfo";
import Search from "./pages/Search";

export default class Routes extends React.Component {

    constructor(){
        super();

        this.state = {
            isMobile: null
        };

        this.handleResize = this.handleResize.bind(this);
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
            this.setState({isMobile: true});
        } else {
            this.setState({isMobile: false});
        }
    }

    render() {
        return (
            <BrowserRouter>
                <Header isMobile={this.state.isMobile}/>
                <div id="content">
                    <Switch>
                        <Route path="/movie/:id" component={MovieInfo}/>
                        <Route exact path="/" render={(props) => <Homepage {...props} isMobile={this.state.isMobile} />}/>
                        <Route path="/discover" component={Discover}/>
                        <Route exact path="/movies" component={Movies}/>
                        <Route path="/tv-shows" component={TV}/>
                        <Route path="/search" component={Search}/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}