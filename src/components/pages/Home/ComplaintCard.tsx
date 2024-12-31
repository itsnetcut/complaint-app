import React from 'react';
import { format } from 'date-fns';
import type { Complaint } from '../../types/complaint';
import { getStatusColor } from '../../utils/statusColors';

interface ComplaintCardProps {
  complaint: Complaint;
}

function ComplaintCard({ complaint }: ComplaintCardProps) {
  const statusColor = getStatusColor(complaint.status);

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-start mb-4">
        <span className={`px-3 py-1 rounded-full text-sm ${statusColor}`}>
          {complaint.status.replace('_', ' ')}
        </span>
        <span className="text-sm text-gray-500">
          {format(new Date(complaint.created_at), 'MMM d, yyyy')}
        </span>
      </div>
      <p className="text-gray-700 mb-4 line-clamp-3">{complaint.content}</p>
      <div className="text-sm text-gray-500">
        {complaint.is_anonymous ? 'Anonymous' : 'Registered User'}
      </div>
    </div>
  );
}

export default ComplaintCard;