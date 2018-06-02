import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import SignUp from './SignUp';
import Login from './Login';
import Auth from './Auth';
import Main from './Main';
import Users from '../containers/Users';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/login" component={Login} />
      <Auth>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/users" component={Users} />
        </Switch>
      </Auth>
    </Switch>
  </Router>
);

export default App;
