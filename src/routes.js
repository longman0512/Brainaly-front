/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { Navigate, Redirect } from 'react-router-dom';
import DashboardLayout from 'src/layouts/DashboardLayout';
import MainLayout from 'src/layouts/MainLayout';
import AccountView from 'src/views/account/AccountView';
import CustomerListView from 'src/views/customer/CustomerListView';
import DashboardView from 'src/views/reports/DashboardView';
import HomeView from 'src/views/home/HomeView';
import NotFoundView from 'src/views/errors/NotFoundView';
import ProductListView from 'src/views/product/ProductListView';
import RegisterView from 'src/views/auth/RegisterView';
import LoginView from 'src/views/auth/LoginView';
import SettingsView from 'src/views/settings/SettingsView';
import StoreContext from 'src/context/index';

const { store } = React.useContext(StoreContext);

const routes = [
  {
    path: 'app',
    element: <DashboardLayout />,
    children: [
      { path: 'account', element: <AccountView /> },
      { path: 'customers', element: <CustomerListView /> },
      { path: 'dashboard', element: <DashboardView /> },
      { path: 'products', element: <ProductListView /> },
      { path: 'settings', element: <SettingsView /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'home', element: <HomeView /> },
      { path: 'signup', element: <RegisterView /> },
      { path: 'signin', element: <LoginView /> },
      { path: '404', element: <NotFoundView /> },
      { path: '/', element: <HomeView /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: 'user',
    element: <DashboardLayout />,
    children: [
      { path: 'home', element: store.userEmail ? <Redirect to="/signin" /> : <ProductListView /> },
      { path: 'signup', element: <RegisterView /> },
      { path: 'signin', element: <LoginView /> },
      { path: '404', element: <NotFoundView /> },
      { path: '/', element: <HomeView /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  }
];

export default routes;
