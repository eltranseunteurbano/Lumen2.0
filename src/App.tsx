import React from 'react';
import './styles/reset.scss';
import './styles/general.scss'

import { HashRouter, Switch, Route } from 'react-router-dom';
import * as Routes from './constants/Routes';

//Hooks
import UserContext from './hooks/UserContext';

import Home from './containers/Home/Home';
import Login from './containers/Login/Login';

const App = () => {

  const user = React.useContext(UserContext);

  return (
    <UserContext.Provider value={ user } >
      <div className="App">
        <HashRouter>
          <Switch>
            <Route exact path={Routes.INDEX}> <Home /> </Route>
            <Route exact path={Routes.LOGIN}> <Login /> </Route>
          </Switch>
        </HashRouter>
      </div>
    </UserContext.Provider>
  );
}

export default App;
