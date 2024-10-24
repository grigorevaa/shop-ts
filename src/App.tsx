import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppLayout } from './components/AppLayout';
import { HomePage } from './components/pages/HomePage';
import { NotFound } from './components/pages/NotFound';
import { ProductPage } from './components/pages/ProductPage';
import { store } from './redux/store';
import './scss/style.scss';

function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Routes>
					<Route element={<AppLayout />}>
						<Route path="/" element={<HomePage />} />
						{/* <Route path="/:category" element={<HomePage />} /> */}
						<Route path="/product/:id" element={<ProductPage />} />
					</Route>
					<Route path="*" element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</Provider>
	);
}

export default App;
