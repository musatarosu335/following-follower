import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import SignUp from './SignUp';
import Login from './Login';
import Users from './Users';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/users" component={Users} />
    </Switch>
  </Router>
);

export default App;
