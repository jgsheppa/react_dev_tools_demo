import { useSelector } from 'react-redux';
import ErrorNotFound from '../404';

export default function UserNotifications() {
  const state = useSelector((state) => state);

  const url =
    process.env.NODE_ENV === 'production'
      ? 'https://nifty-shaw-bc9b44.netlify.app/admin/notifications'
      : 'http://localhost:3000/admin/notifications';

  return window.location.href === url && !state.userRole.admin ? (
    <ErrorNotFound />
  ) : (
    <div
      style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}
    >
      <p>Send a notification to all of our users!</p>
      <label for="user notifications">Notify our users</label>
      <br />
      <input name="user notifications"></input>
      <br />
      <button>Submit</button>
    </div>
  );
}
