import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Header from './HeaderComponent/HeaderComponent';
import Footer from './FooterComponent/FooterComponent';

const Main = (props) => {
    return (
        <div>
            <Header />
            <Switch>
                
            </Switch>
            <Footer />
        </div>
    );
}

export default Main;
