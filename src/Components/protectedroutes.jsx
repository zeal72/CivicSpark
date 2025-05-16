// src/components/ProtectedRoute.js
import { Navigate } from 'react-router-dom';
import { useAuth } from './Context';

const ProtectedRoute = ({ children }) => {
	const { user, authLoading } = useAuth();

	if (authLoading) return <div className="text-center p-10">Checking Auth...</div>;
	if (!user) return <Navigate to="/login" replace />;
	return children;
};

export default ProtectedRoute;
