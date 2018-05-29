import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

export default class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      uid: null,
    };
  }

  render() {
    if (!this.state.uid) {
      return (
        <Redirect to="/login" />
      );
    }
    return (
      this.props.children
    );
  }
}

Auth.propTypes = {
  children: PropTypes.object.isRequired,
};
