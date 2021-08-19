import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import AuthContext from '../../context/Auth/authContext'
import Home from '../Home/Home';

export default function PrivateRoute({ protectedRoutes, children }) {
  const router = useRouter();

	const authContext = useContext(AuthContext);
	const { loading, isAuthenticated } = authContext;

  const pathIsProtected = protectedRoutes.indexOf(router.pathname) !== -1;

  useEffect(() => {
    if (!loading && !isAuthenticated && pathIsProtected) {
      router.push('/');
    }
  }, [loading, isAuthenticated, pathIsProtected]);

  if ((loading || !isAuthenticated) && pathIsProtected) {
    return <Home />;
  }

  return children;
}