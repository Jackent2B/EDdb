import React from 'react'
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

function Main() {
    return (
        <Router>
            <Header />
            <Switch>
                <Redirect to='/' />
            </Switch>
            <Footer />
        </Router>
    )
}

export default Main
