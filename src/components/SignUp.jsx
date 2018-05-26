import firebase from 'firebase/app';
import React from 'react';

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleChangeEmail(value) {
    this.setState({
      email: value,
    });
  }

  handleChangePassword(value) {
    this.setState({
      password: value,
    });
  }

  handleSubmit() {
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((user) => {
        console.log(`Success! ${user}`); // eslint-disable-line no-console

        // ユーザをFirestoreに追加
        const db = firebase.firestore();
        db.collection(`users/${user.user.uid}/sign_up`).add({
          createOn: new Date(),
        }).then((docRef) => {
          console.log('Document written with ID: ', docRef.id); // eslint-disable-line no-console
        }).catch((err) => {
          console.log(err); // eslint-disable-line no-console
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode); // eslint-disable-line no-console
        console.log(errorMessage); // eslint-disable-line no-console
      });
  }

  render() {
    return (
      <div>
        <p>Email: </p>
        <input
          type="text"
          value={this.state.email}
          onChange={e => this.handleChangeEmail(e.target.value)}
        />
        <br />
        <p>Password: </p>
        <input
          type="password"
          value={this.state.password}
          onChange={e => this.handleChangePassword(e.target.value)}
        />
        <br />
        <button
          type="submit"
          onClick={() => this.handleSubmit()}
        >
          Submit
        </button>
      </div>
    );
  }
}
