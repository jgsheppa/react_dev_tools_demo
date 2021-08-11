import { useSelector } from 'react-redux';
import ErrorNotFound from '../404';

export default function AdminPage() {
  const location = useSelector((state) => state.location);
  console.log('admin', location);

  return location.prev.pathname === '/' ? (
    <div>You're an admin!</div>
  ) : (
    <ErrorNotFound />
  );
}
