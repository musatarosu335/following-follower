import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import SignUp from './SignUp';
import Login from './Login';
import Users from './Users';
import RedirectTest from './RedirectTest';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/users" component={Users} />
      <Route exact path="/redirect-test" component={RedirectTest} />
    </Switch>
  </Router>
);

export default App;
