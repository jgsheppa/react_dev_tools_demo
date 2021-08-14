import { useSelector, useDispatch } from 'react-redux';
import ErrorNotFound from '../404';
// import fs from 'fs';

export default function AdminPage() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const url =
    process.env.NODE_ENV === 'production'
      ? 'https://nifty-shaw-bc9b44.netlify.app/admin'
      : 'http://localhost:3000/admin';
  // If we enter this URL we will see a 404 page, but if we
  // navigate to the admin page with Redux, we will see the
  // contents of the admin page
  return window.location.href === url && !state.userRole.admin ? (
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
