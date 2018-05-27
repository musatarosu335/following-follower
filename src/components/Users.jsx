import firebase from 'firebase/app';
import React from 'react';
import { Redirect } from 'react-router-dom';

export default class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
  }

  handleClick() {
    firebase.auth().onAuthStateChanged((user) => {
      this.setState({
        user,
      });
    });
  }

  render() {
    if (!this.state.user) {
      return (
        <button onClick={() => this.handleClick()}>
          Confilm
        </button>
      );
    }
    return (
      <div>
        <h1>Users</h1>
        <p>{this.state.user.email}</p>
        <Redirect to="/redirect-test" />
      </div>
    );
  }
}
