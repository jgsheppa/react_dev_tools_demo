import React from 'react';
import ErrorNotFound from './components/404';
import HomePage from './components/Home';
import AdminPage from './components/admin/index';
import UserNotifications from './components/admin/notifications';

const Home = () => <HomePage />;
const NotFound = () => <ErrorNotFound />;
const Admin = () => <AdminPage />;
const Notifications = () => <UserNotifications />;

export { Home, NotFound, Admin, Notifications };
