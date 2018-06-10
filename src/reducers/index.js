const initialState = {
  followingUsers: [],
  followers: [],
  serchWord: '',
  serchedUsers: [],
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
    case 'CHANGE_SERCH_WORD':
      return ({
        ...state,
        serchWord: action.payload.serchWord,
      });
    case 'SET_SERCHED_USERS':
      return ({
        ...state,
        serchedUsers: action.payload.serchedUsers,
      });
    default:
      return state;
  }
};

export default indexReducer;
