import firebase from 'firebase/app';

const setFollowingUsers = followingUsers => ({
  type: 'SET_FOLLOWING_USERS',
  payload: {
    followingUsers,
  },
});

export const dammy = () => {
  console.log('this is dammy'); // eslint-disable-line
};

export const fetchFollowingUsers = () => {
  const db = firebase.firestore();
  const followingUsers = [];
  const { currentUser } = firebase.auth();

  return (
    (dispatch) => {
      db.collection(`users/${currentUser.uid}/following`).get()
        .then((snapshot) => {
          snapshot.forEach((doc) => {
            const followingUser = doc.id;
            followingUsers.push(followingUser);
          });
          dispatch(setFollowingUsers(followingUsers));
        });
    }
  );
};
