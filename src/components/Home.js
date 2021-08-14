import { useDispatch } from 'react-redux';

export default function HomePage() {
  const dispatch = useDispatch();

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        height: '400px',
        width: '400px',
      }}
    >
      <div>You're Home!</div>
      <button onClick={() => dispatch({ type: 'ADMIN' })}>
        Go to Admin Page
      </button>
    </div>
  );
}
