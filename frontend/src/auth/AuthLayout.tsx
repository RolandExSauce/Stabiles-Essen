import React from 'react'
import { Navigate, Outlet } from 'react-router';
import { useLocation } from "react-router-dom";

const AuthLayout = () => {
  const isAuthenticated = false; // manually simulate logged-in state
  const location = useLocation();

  // Redirect authenticated users away from login/register
  if (isAuthenticated && (location.pathname === "/login" || location.pathname === "/register")) {
    return <Navigate to="/" replace />;
  };

  return (
    <div className="auth-layout">
      <div className="auth-header">
        <h1>Welcome to My App</h1>
      </div>
      <div className="auth-content">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
