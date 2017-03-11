import React from 'react';

import { render } from 'react-dom';

// Import css
import css from './styles/style.scss';

// Import Components
import App from './components/App';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';
require('materialize-css/dist/css/materialize.css');
require('materialize-css/dist/js/materialize.js');
require('materialize-css/js/init.js');

// import react router deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={PhotoGrid}></IndexRoute>
        // <Route path="/view/:postId" component={Single}></Route>
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('root'));
