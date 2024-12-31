import React from 'react';
import { useComplaints } from './hooks/useAdminComplaints';
import ComplaintCard from './ComplaintCard';

function ComplaintsList() {
  const { complaints, loading, error } = useComplaints();

  if (loading) {
    return (
      <div className="text-center py-8">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8 text-red-600">
        An error occurred while loading complaints.
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {complaints.map((complaint) => (
        <ComplaintCard key={complaint.id} complaint={complaint} />
      ))}
    </div>
  );
}

export default ComplaintsList;