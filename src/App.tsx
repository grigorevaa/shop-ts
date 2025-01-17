import React from 'react';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppLayout } from './components/layouts/AppLayout';
import {
  CartPage,
  HomePage,
  NotAuth,
  NotFound,
  ProductPage,
  ProfilePage,
  ProtectedRoute,
} from './components/pages';
import { store } from './redux/store';
import './scss/style.scss';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route
              path="/cart"
              element={
                <ProtectedRoute>
                  <CartPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <ProfilePage />
                </ProtectedRoute>
              }
            />
            <Route path="/not-auth" element={<NotAuth />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Toaster
        toastOptions={{ duration: 5000, style: { fontSize: '1.6rem' } }}
      />
    </Provider>
  );
}

export default App;
