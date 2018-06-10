import React from 'react';
import PropTypes from 'prop-types';

const Serch = ({
  serchWord,
  serchedUsers,
  serchAndSetUsers,
}) => (
  <div>
    <h1>Serch Page</h1>
    <input
      type="text"
      value={serchWord}
      onChange={e => serchAndSetUsers(e.target.value)}
    />
    <br />
    <ul>
      {serchedUsers.map((serchedUser, i) => (
        <li key={i}> {/* eslint-disable-line */}
          {serchedUser}
        </li>
      ))}
    </ul>
  </div>
);

Serch.propTypes = {
  serchWord: PropTypes.string.isRequired,
  serchedUsers: PropTypes.array.isRequired,
  serchAndSetUsers: PropTypes.func.isRequired,
};

export default Serch;
