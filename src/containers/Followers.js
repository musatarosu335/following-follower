import { connect } from 'react-redux';
import firebase from 'firebase/app';
import Followers from '../components/Followers';
import { setFollowers } from '../actions';

const mapStateToProps = ({ followers }) => ({
  followers,
});

const mapDispatchToProps = dispatch => ({
  fetchFollowers() {
    console.log('log');
    const db = firebase.firestore();
    const followers = [];
    const { currentUser } = firebase.auth();

    db.collection(`users/${currentUser.uid}/follower`).get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          const follower = doc.id;
          followers.push(follower);
        });
        dispatch(setFollowers(followers));
      });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Followers);
