import firebase from 'firebase/app';
import React from 'react';
import { Link } from 'react-router-dom';

export default class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  componentWillMount() {
    const db = firebase.firestore();
    const users = [];

    db.collection('users').get().then((snapshot) => {
      snapshot.forEach((doc) => {
        const { name } = doc.data();
        users.push(name);
      });
      this.setState({
        users,
      });
    });
  }

  render() {
    return (
      <div>
        <h1>Users</h1>
        <ul>
          {this.state.users.map((user, i) => (
            // eslint-disable-next-line
            <li key={i}>{user}</li>
          ))}
        </ul>
        <Link to="/">Main</Link>
      </div>
    );
  }
}
