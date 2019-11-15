import React from 'react';
import './styles/reset.scss';
import './styles/general.scss'

import { HashRouter, Switch, Route } from 'react-router-dom';

import * as Routes from './constants/Routes';

import Home from './containers/Home/Home';
import FirebaseContext from './hooks/FirebaseContext';
import Firebase from './constants/firebase/firebaseSetup';

const App = () => {
  return (
    <div className="App">
      <FirebaseContext.Provider value={Firebase}>
        <HashRouter>
          <Switch>
            <Route exact path={Routes.INDEX}> <Home /> </Route>
          </Switch>
        </HashRouter>
      </FirebaseContext.Provider>
    </div>
  );
}

export default App;
