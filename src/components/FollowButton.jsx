import firebase from 'firebase/app';
import React from 'react';
import PropTypes from 'prop-types';

const handleClick = (userId) => {
  const db = firebase.firestore();
  const { currentUser } = firebase.auth();
  const followingUserRef = db.collection(`users/${currentUser.uid}/following`).doc(userId);

  followingUserRef.set({
    uid: userId,
    follow_time: new Date(),
  }).then(() => {
    console.log('Document written'); // eslint-disable-line no-console
  }).catch((err) => {
    console.log(err); // eslint-disable-line no-console
  });
};

const FollowButton = ({ userId }) => (
  <button onClick={() => handleClick(userId)}>
    Follow
  </button>
);

FollowButton.propTypes = {
  userId: PropTypes.string.isRequired,
};

export default FollowButton;
