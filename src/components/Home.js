import { useDispatch, useSelector } from 'react-redux';

export default function HomePage() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  console.log('store', state.location.routesMap);
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
