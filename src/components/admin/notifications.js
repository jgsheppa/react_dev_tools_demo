export default function UserNotifications() {
  return (
    <div
      style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}
    >
      <p>Send a notification to all of our users!</p>
      <label for="user notifications">Notify our users</label>
      <br />
      <input name="user notifications"></input>
    </div>
  );
}
