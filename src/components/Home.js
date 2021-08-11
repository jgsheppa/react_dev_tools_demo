import { useDispatch, useSelector } from 'react-redux';
import { ADMIN } from '../redux/actionTypes';

export default function HomePage() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  console.log('store', state.location.routesMap);
  return (
    <>
      <div>You're Home!</div>
      <button onClick={() => dispatch({ type: 'ADMIN' })}>
        Go to Admin Page
      </button>
    </>
  );
}
