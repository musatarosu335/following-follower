const initialState = {
  followingUsers: [],
  followers: [],
};

const indexReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_FOLLOWING_USERS':
      return ({
        ...state,
        followingUsers: action.payload.followingUsers,
      });
    case 'SET_FOLLOWERS':
      return ({
        ...state,
        followers: action.payload.followers,
      });
    default:
      return state;
  }
};

export default indexReducer;
