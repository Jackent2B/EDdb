import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import RecommendForm from './RecommendForm';
import Home from './Home';

function Main() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/home' component={Home} />
        <Route exact path='/recommendation' component={RecommendForm} />
        <Redirect to='/home' />
      </Switch>
      <Footer />
    </Router>
  );
}

export default Main;
