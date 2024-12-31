import React from 'react';
import { useComplaints } from '../../../hooks/useComplaints';
import ComplaintCard from './ComplaintCard';

function ComplaintList() {
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
      <h2 className="text-2xl font-bold text-gray-900">Recent Complaints</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {complaints.map((complaint) => (
          <ComplaintCard key={complaint.id} complaint={complaint} />
        ))}
      </div>
    </div>
  );
}

export default ComplaintList;