import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth';
import AdminHeader from './AdminHeader';
import ComplaintsList from './ComplaintsList';
import useAdminStatus from './hooks/useAdminStatus';

function AdminPanel() {
  const { user } = useAuth();
  const { isAdmin, loading } = useAdminStatus();

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (loading) {
    return <div className="flex justify-center p-8">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
    </div>;
  }

  if (!isAdmin) {
    return <Navigate to="/" />;
  }

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <AdminHeader />
      <ComplaintsList />
    </div>
  );
}

export default AdminPanel;