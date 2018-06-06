import React from 'react';
import { Link } from 'react-router-dom';

const Main = () => (
  <div>
    <h1>Main Page</h1>
    <Link to="/users">Users</Link>
    <br />
    <Link to="/followers">Followers</Link>
  </div>
);

export default Main;
