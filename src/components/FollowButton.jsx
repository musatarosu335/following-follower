import React from 'react';
import PropTypes from 'prop-types';

const FollowButton = ({ userId, followingUsers, writeFollowingUser }) => {
  if (followingUsers.indexOf(userId) >= 0) {
    return (
      <button>
        Unfollow
      </button>
    );
  }
  return (
    <button onClick={() => writeFollowingUser(userId)}>
      Follow
    </button>
  );
};

FollowButton.propTypes = {
  userId: PropTypes.string.isRequired,
  followingUsers: PropTypes.array.isRequired,
  writeFollowingUser: PropTypes.func.isRequired,
};

export default FollowButton;
