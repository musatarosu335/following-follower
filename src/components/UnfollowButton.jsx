import firebase from 'firebase/app';
import React from 'react';
import PropTypes from 'prop-types';

const handleClick = (userId) => {
  const db = firebase.firestore();
  const { currentUser } = firebase.auth();
  const followingUserRef = db.collection(`users/${currentUser.uid}/following`).doc(userId);

  followingUserRef.delete()
    .then(() => console.log('Unfollowed')) // eslint-disable-line
    .catch(err => console.log(err)); // eslint-disable-line
};

const UnfollowButton = ({ userId }) => (
  <button onClick={() => handleClick(userId)}>
    Unfollow
  </button>
);

UnfollowButton.propTypes = {
  userId: PropTypes.string.isRequired,
};

export default UnfollowButton;
