import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ProductPage from './pages/ProductPage';
import Home from './pages/HomePage';
import Login from './pages/LoginPage';
import Register from './pages/RegisterPage';
import Notfound from './pages/NotfoundPage';
import ProductDetail from './pages/ProductDetailPage/ProductDetailPage';
import AboutPage from './pages/AboutPage';

const App: React.FC = () => {
	return (
		<div>
			<Header />
			<main id="main" className="container">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/product" element={<ProductPage />} />
					<Route path="/product/:productId" element={<ProductDetail />} />
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
					<Route path="/about" element={<AboutPage />} />
					<Route path="*" element={<Notfound />} />
				</Routes>
			</main>
			<Footer />
		</div>
	);
};

export default App;