import React, { Component } from 'react';
import Header from './HeaderComp';
import Footer from './FooterComp';
import Home from './HomeComp';
import About from './AboutComp';
import '../App.css';
import { Switch, Route, Redirect } from 'react-router-dom';




class Main extends Component {
/*
    componentDidMount() {
        this.props.fetchCampsites();
        this.props.fetchComments();
        this.props.fetchPromotions();
        this.props.fetchPartners();
    }
    */

    render() {

        const HomePage = () => {
            return (
                <Home
                    
                />
            );
        }
        
        const AboutPage = () => {
            return (
                <About
                    
                />
            );
        }
        

        return (
            <div>
                <Header/>
                        <Switch>
                            <Route path='/home' component={HomePage} />
                            <Route exact path='/about' component={AboutPage} />
                            <Redirect to='/home' />
                        </Switch>
    
                <Footer/>
            </div>
        );
    }
}

export default Main;
//<Route exact path='/about' component = {AboutPage} />