import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import SignUp from './SignUp';
import Login from './Login';
import Auth from './Auth';
import Main from './Main';
import Serch from './Serch';
import Users from '../containers/Users';
import Followers from '../containers/Followers';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/login" component={Login} />
      <Auth>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/serch" component={Serch} />
          <Route exact path="/users" component={Users} />
          <Route exact path="/followers" component={Followers} />
        </Switch>
      </Auth>
    </Switch>
  </Router>
);

export default App;
