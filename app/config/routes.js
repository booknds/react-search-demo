import React from 'react';
import Main from '../components/Main';
import Home from '../components/Home';
import Profile from '../components/Profile';
import { Route, IndexRoute } from 'react-router';

/**
  IndexRoute is a default route if no other routes match the url route
  */
console.log(Profile);
export default (
  <Route path="/" component={Main}>
    <Route path="profile/:prescription_id" component={Profile}> </Route>
    <IndexRoute component={Home} />
  </Route>
);
