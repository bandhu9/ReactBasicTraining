import React, { useState, useSelector } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../actions/userActions';

import UserList from './UserList';

const UserFormSubmission = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { username, email };
    dispatch(addUser(newUser));
    setUsername('');
    setEmail('');
  };
  
  return (
    <>
    <div>
      <h2>Add User</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
    <UserList />
    </>
  );
};

export default UserFormSubmission;
