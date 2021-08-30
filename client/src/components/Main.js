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
import ShareReviewForm from './ShareReviewForm';

function Main() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/home' component={Home} />
        <Route exact path='/recommendation' component={RecommendForm} />
        <Route exact path='/share-review' component={ShareReviewForm} />
        <Redirect to='/home' />
      </Switch>
      <Footer />
    </Router>
  );
}

export default Main;
