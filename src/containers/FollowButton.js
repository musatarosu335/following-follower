import { connect } from 'react-redux';
import firebase from 'firebase/app';
import FollowButton from '../components/FollowButton';
import { fetchFollowingUsers } from '../actions';

const mapStateToProps = ({ followingUsers }) => ({
  followingUsers,
});

const mapDispatchToProps = dispatch => ({
  // フォローした・されたユーザーへの書き込み処理
  writeFollowingAndFollowerUser(userId) {
    const db = firebase.firestore();
    const { currentUser } = firebase.auth();
    const followingUserRef = db.collection(`users/${currentUser.uid}/following`).doc(userId);
    const followerUserRef = db.collection(`users/${userId}/follower`).doc(currentUser.uid);

    // followingの書き込み処理
    followingUserRef.set({
      uid: userId,
      follow_time: new Date(),
    }).then(() => {
      console.log('Document written'); // eslint-disable-line no-console
      dispatch(fetchFollowingUsers()); // フォロー後のfollowingUsersを取得
    }).catch((err) => {
      console.log(err); // eslint-disable-line no-console
    });

    // followerの書き込み処理
    followerUserRef.set({
      uid: currentUser.uid,
      followed_time: new Date(),
    }).then(() => {
      console.log('Document written'); // eslint-disable-line no-console
    }).catch((err) => {
      console.log(err); // eslint-disable-line no-console
    });
  },
  // アンフォローした・されたユーザへの削除処理
  deleteFollowingAndFollowerUser(userId) {
    const db = firebase.firestore();
    const { currentUser } = firebase.auth();
    const followingUserRef = db.collection(`users/${currentUser.uid}/following`).doc(userId);
    const followerUserRef = db.collection(`users/${userId}/follower`).doc(currentUser.uid);

    // followingの削除
    followingUserRef.delete()
      .then(() => {
        console.log('Unfollowed'); // eslint-disable-line
        dispatch(fetchFollowingUsers()); // アンフォロー後のfollowingUsersを取得
      })
      .catch(err => console.log(err)); // eslint-disable-line

    // followerの削除
    followerUserRef.delete()
      .then(() => {
        console.log('Delete follower'); // eslint-disable-line
      })
      .catch(err => console.log(err)); // eslint-disable-line
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(FollowButton);
