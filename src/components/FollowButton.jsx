import firebase from 'firebase/app';
import React from 'react';
import PropTypes from 'prop-types';

const handleClick = (userId) => {
  // ここでFirestoreに書き込む
  const db = firebase.firestore();
  const { currentUser } = firebase.auth();

  db.collection(`users/${currentUser.uid}/following`).add({
    uid: userId,
    follow_time: new Date(),
  }).then((docRef) => {
    console.log('Document written with ID: ', docRef.id); // eslint-disable-line no-console
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
