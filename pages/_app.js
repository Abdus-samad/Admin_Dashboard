import '../styles/globals.css';
import AuthState from '../context/Auth/AuthState';
import ProductState from '../context/Product/ProductState';
import PrivateRoute from '../components/Routes/PrivateRoute';

function MyApp({Component, pageProps}) {
	const protectedRoutes = ['/'];
	return (
		<>
			<AuthState>
				<ProductState>
					<PrivateRoute protectedRoutes={protectedRoutes}>
						<Component {...pageProps} />
					</PrivateRoute>
				</ProductState>
			</AuthState>
		</>
	);
}

export default MyApp;
