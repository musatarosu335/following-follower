import React from 'react';
import PropTypes from 'prop-types';

const handleClick = (userId) => {
  // ここでFirestoreに書き込む
  console.log(userId);
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
