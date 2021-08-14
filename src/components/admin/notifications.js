import { useSelector } from 'react-redux';
import ErrorNotFound from '../404';

export default function UserNotifications() {
  const state = useSelector((state) => state);

  return window.location.href === 'http://localhost:3000/admin/notifications' &&
    !state.userRole.admin ? (
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
