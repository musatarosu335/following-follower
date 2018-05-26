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
