import React from 'react';
import PropTypes from 'prop-types';

const handleClick = (userId) => {
  //
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
