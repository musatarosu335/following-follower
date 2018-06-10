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
          console.log(doc.data());
        });
      })
      .catch((err) => {
        console.log(err);
      });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Serch);
