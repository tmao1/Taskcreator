/* eslint-disable import/imports-first */
/* global document */

import App from './components/App';
import Home from './components/Home';
import CreateTask from './components/CreateTask';
import CreateTasksContainer from './components/CreateTasksContainer';

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="createTask" component={CreateTask} />
      <Route path="tasks" component={CreateTasksContainer} />
    </Route>
  </Router>
  , document.getElementById('root'));
