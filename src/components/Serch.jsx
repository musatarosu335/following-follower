import React from 'react';

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
  </div>
);

export default Serch;
