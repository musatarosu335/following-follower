import firebase from 'firebase/app';
import React from 'react';
import { Link } from 'react-router-dom';

import FollowButton from './FollowButton';
import UnfollowButton from './UnfollowButton';

export default class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      followingUsers: [],
    };
  }

  componentWillMount() {
    this.fetchUsers();
    this.fetchFollowingUsers();
  }

  fetchUsers() {
    const db = firebase.firestore();
    const users = [];
    const { currentUser } = firebase.auth();

    db.collection('users').get().then((snapshot) => {
      snapshot.forEach((doc) => {
        if (currentUser.uid !== doc.id) {
          const { name } = doc.data();
          const userId = doc.id;
          const userInfo = {
            userId,
            name,
          };
          users.push(userInfo);
        }
      });
      this.setState({
        users,
      });
    });
  }

  fetchFollowingUsers() {
    const db = firebase.firestore();
    const followingUsers = [];
    const { currentUser } = firebase.auth();

    db.collection(`users/${currentUser.uid}/following`).get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          const followingUser = doc.data().uid;
          followingUsers.push(followingUser);
        });
        this.setState({
          followingUsers,
        });
      });
  }

  render() {
    return (
      <div>
        <h1>Users(Other than my own)</h1>
        <ul>
          {this.state.users.map((user, i) => (
            // eslint-disable-next-line
            <li key={i}>
              {user.name}
              {this.state.followingUsers.indexOf(user.userId) >= 0
                ? <UnfollowButton />
                : <FollowButton userId={user.userId} />
              }
            </li>
          ))}
        </ul>
        <Link to="/">Main</Link>
      </div>
    );
  }
}
