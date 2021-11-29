import React, {
  useEffect,
  useState,
  createContext,
  useContext,
  useReducer,
} from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
  useHistory,
} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import RecommendForm from './RecommendForm';
import Home from './Home';
import ShareReviewForm from './ShareReviewForm';
import Login from './Login';
import Signup from './Signup';
import RecommendedCourses from './RecommendedCourses';
import { reducer, initialstate } from '../reducers/userReducer';

export const UserContext = createContext();
const Routing = () => {
  const history = useHistory();
  const { state, dispatch } = useContext(UserContext);
  useEffect(() => {
    //JSON.parse() is used to convert string to object
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      dispatch({ type: 'USER', payload: user });
      //history.push('/');
    }
  }, []);

  return (
    <Switch>
      <Route exact path='/home' component={Home} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/signup' component={Signup} />
      <Route exact path='/recommendation' component={RecommendForm} />
      <Route exact path='/share-review' component={ShareReviewForm} />
      <Route exact path='/courses/recommended' component={RecommendedCourses} />
      {/* <Redirect to='/home' /> */}
    </Switch>
  );
};
function Main() {
  const [state, dispatch] = useReducer(reducer, initialstate);
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      <Router>
        <Header />
        <Routing />
        <Footer />
      </Router>
    </UserContext.Provider>
  );
}

export default Main;
