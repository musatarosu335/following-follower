import firebase from 'firebase/app';
import { connect } from 'react-redux';
import Serch from '../components/Serch';
import { changeSerchWord, setSerchedUsers } from '../actions';

const mapStateToProps = ({ serchWord, serchedUsers }) => ({
  serchWord,
  serchedUsers,
});

const mapDispatchToProps = dispatch => ({
  serchAndSetUsers(serchWord) {
    const db = firebase.firestore();
    const serchedUsers = [];

    dispatch(changeSerchWord(serchWord));

    db.collection('users').where('name', '==', serchWord).get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          serchedUsers.push(doc.data().name);
        });
        return serchedUsers;
      })
      .then((result) => {
        dispatch(setSerchedUsers(result));
      })
      .catch((err) => {
        console.log(err); // eslint-disable-line
      });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Serch);
