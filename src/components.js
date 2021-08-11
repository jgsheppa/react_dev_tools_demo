import React from 'react';
import ErrorNotFound from './components/404';
import HomePage from './components/Home';
import AdminPage from './components/admin/index';

const Home = () => <HomePage />;
const NotFound = () => <ErrorNotFound />;
const Admin = () => <AdminPage />;

export { Home, NotFound, Admin };
