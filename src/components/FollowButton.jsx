import firebase from 'firebase/app';
import React from 'react';
import PropTypes from 'prop-types';

export default class FollowButton extends React.Component {
  handleClick(userId) {
    const db = firebase.firestore();
    const { currentUser } = firebase.auth();
    const followingUserRef = db.collection(`users/${currentUser.uid}/following`).doc(userId);

    followingUserRef.set({
      uid: userId,
      follow_time: new Date(),
    }).then(() => {
      console.log('Document written'); // eslint-disable-line no-console
      this.props.fetchFollowingUsers();
    }).catch((err) => {
      console.log(err); // eslint-disable-line no-console
    });
  }

  render() {
    return (
      <button onClick={() => this.handleClick(this.props.userId)}>
        Follow
      </button>
    );
  }
}

FollowButton.propTypes = {
  userId: PropTypes.string.isRequired,
  fetchFollowingUsers: PropTypes.func.isRequired,
};
