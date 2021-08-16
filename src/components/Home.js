import { useDispatch, useSelector } from 'react-redux';
import React, { useState } from 'react';
import { updateUsername } from '../redux/actions';

export default function HomePage() {
  const state = useSelector((state) => state);
  console.log(state.profile.username);
  const dispatch = useDispatch();

  const [username, setUsername] = useState('');

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        flexDirection: 'column',
        height: '100%',
        width: '800px',
      }}
    >
      <h1>You're Home!</h1>
      <h2>Username: {state.profile.username}</h2>
      <input
        style={{
          marginBottom: '20px',
        }}
        onChange={(e) => setUsername(e.target.value)}
      ></input>
      <button
        style={{
          marginBottom: '20px',
        }}
        onClick={() => dispatch(updateUsername(username))}
      >
        Submit new username
      </button>
      <button
        style={{
          marginBottom: '20px',
        }}
        onClick={() => dispatch({ type: 'ADMIN' })}
      >
        Go to Admin Page
      </button>
    </div>
  );
}
