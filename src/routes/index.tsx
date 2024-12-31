import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ProtectedRoute } from './ProtectedRoute';
import { AdminRoute } from './AdminRoute';
import { LoadingSpinner } from '../components/ui/LoadingSpinner';

// Lazy load pages for better performance
const Home = React.lazy(() => import('../components/pages/Home'));
const Login = React.lazy(() => import('../components/pages/Login'));
const Register = React.lazy(() => import('../components/pages/Register'));
const SubmitComplaint = React.lazy(() => import('../components/pages/SubmitComplaint'));
const AdminPanel = React.lazy(() => import('../components/pages/AdminPanel'));

export default function AppRoutes() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
<Route 
  path="/submit" 
  element={
    <SubmitComplaint />
  } 
/>
        <Route 
          path="/admin" 
          element={
            <AdminRoute>
              <AdminPanel />
            </AdminRoute>
          } 
        />
      <Route path="*" element={<div>404 Not Found</div>} />
</Routes>
    </Suspense>
  );
}
