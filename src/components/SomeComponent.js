import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Simulated authentication status
const isAuthenticated = false;

// Higher-Order Component for adding authentication logic
const withAuthentication = (WrappedComponent) => {
  const WithAuthentication = (props) => {
    const navigate = useNavigate();
    useEffect(() => {
      if (!isAuthenticated) {
// Q. How to redirect the URL
        navigate('/login', { replace: true })
      }
    }, []);
// Overrdie the props of return component
    return isAuthenticated ? <WrappedComponent {...props} /> : null;
  };

  return WithAuthentication;
};

// Component that requires authentication
const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to the authenticated dashboard!</p>
    </div>
  );
};

// Wrap the Dashboard component with the withAuthentication HOC
const AuthenticatedDashboard = withAuthentication(Dashboard);

// Main App component
const Hoc = () => {
  return (
    <div>
      <h1>My App</h1>
      <AuthenticatedDashboard />
    </div>
  );
};

export default Hoc;
