import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { business, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-stone-50 text-stone-500">
        Loading...
      </div>
    );
  }

  if (!business) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
