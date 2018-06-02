import firebase from 'firebase/app';
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import FollowButton from './FollowButton';
import UnfollowButton from './UnfollowButton';

export default class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  componentWillMount() {
    this.fetchUsers();
    this.props.fetchFollowingUsers();
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

  render() {
    return (
      <div>
        <h1>Users(Other than my own)</h1>
        <ul>
          {this.state.users.map((user, i) => (
            // eslint-disable-next-line
            <li key={i}>
              {user.name}
              {this.props.followingUsers.indexOf(user.userId) >= 0
                ? <UnfollowButton userId={user.userId} />
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

Users.propTypes = {
  followingUsers: PropTypes.array.isRequired,
  fetchFollowingUsers: PropTypes.func.isRequired,
};
