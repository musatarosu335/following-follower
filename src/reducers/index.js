const initialState = {
  followingUsers: [],
};

const indexReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_FOLLOWING_USERS':
      return ({
        ...state,
        followingUsers: action.payload.followingUsers,
      });
    default:
      return state;
  }
};

export default indexReducer;
