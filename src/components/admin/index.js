import { useSelector, useDispatch } from 'react-redux';
import ErrorNotFound from '../404';
// import fs from 'fs';

export default function AdminPage() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  console.log('user role', state.userRole.admin);

  // If we enter this URL we will see a 404 page, but if we
  // navigate to the admin page with Redux, we will see the
  // contents of the admin page
  return window.location.href === 'http://localhost:3000/admin' &&
    !state.userRole.admin ? (
    <ErrorNotFound />
  ) : (
    <div
      style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}
    >
      <h1>You're an admin!</h1>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          maxWidth: '400px',
        }}
      >
        <button onClick={() => dispatch({ type: 'NOTIFICATIONS' })}>
          Notification Center
        </button>
        <br />
        <label htmlFor="single user">Delete Single User</label>
        <input name="single user"></input>
        <br />

        <label htmlFor="multiple users">Delete Multiple Users</label>
        <input name="multiple users"></input>
      </div>
    </div>
  );
}
