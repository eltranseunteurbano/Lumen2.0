import React from 'react';
import './styles/reset.scss';
import './styles/general.scss'

import { HashRouter, Switch, Route } from 'react-router-dom';

import * as Routes from './constants/Routes';

import Home from './containers/Home/Home';

const App = () => {
  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route exact path={Routes.INDEX}> <Home /> </Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
