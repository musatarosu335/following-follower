import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import SignUp from './SignUp';
import Login from './Login';
import Users from './Users';

const App = () => (
  <Router>
    <Switch>
      <Route
        exact
        path="/"
        render={() => <Login />}
      />
      <Route
        exact
        path="/users"
        render={() => <Users />}
      />
    </Switch>
  </Router>
);

export default App;
