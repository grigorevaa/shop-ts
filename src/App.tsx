import React, { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppLayout } from './components/AppLayout';
import { CartPage } from './components/pages/CartPage';
import { HomePage } from './components/pages/HomePage';
import { NotFound } from './components/pages/NotFound';
import { ProductPage } from './components/pages/ProductPage';
import { ProfilePage } from './components/pages/ProfilePage';
import { ProtectedRoute } from './components/pages/ProtectedRoute';
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
						<Route path="/cart" element={<CartPage />} />
						<Route
							path="/profile"
							element={
								<ProtectedRoute>
									<ProfilePage />
								</ProtectedRoute>
							}
						/>
						<Route path="/not-auth" element={<NotFound />} />
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
