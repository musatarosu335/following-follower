import React from 'react';
import { Link } from 'react-router-dom';

export default class Users extends React.Component {
  render() {
    return (
      <div>
        <h1>Users Page</h1>
        <Link to="/">Main</Link>
      </div>
    );
  }
}
