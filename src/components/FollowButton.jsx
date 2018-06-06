import React from 'react';
import PropTypes from 'prop-types';

const FollowButton = ({
  userId,
  followingUsers,
  writeFollowingAndFollowerUser,
  deleteFollowingUser,
}) => {
  if (followingUsers.indexOf(userId) >= 0) {
    return (
      <button onClick={() => deleteFollowingUser(userId)}>
        Unfollow
      </button>
    );
  }
  return (
    <button onClick={() => writeFollowingAndFollowerUser(userId)}>
      Follow
    </button>
  );
};

FollowButton.propTypes = {
  userId: PropTypes.string.isRequired,
  followingUsers: PropTypes.array.isRequired,
  writeFollowingAndFollowerUser: PropTypes.func.isRequired,
  deleteFollowingUser: PropTypes.func.isRequired,
};

export default FollowButton;
