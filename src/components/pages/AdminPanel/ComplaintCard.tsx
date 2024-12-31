import React, { useState } from 'react';
import { format } from 'date-fns';
import { MessageSquare } from 'lucide-react';
import type { Complaint } from '../../types/complaint';
import { getStatusColor } from '../../utils/statusColors';
import StatusSelect from './StatusSelect';

interface ComplaintCardProps {
  complaint: Complaint;
}

function ComplaintCard({ complaint }: ComplaintCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const statusColor = getStatusColor(complaint.status);

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-start mb-4">
        <div className="space-y-1">
          <div className="flex items-center space-x-2">
            <span className={`px-3 py-1 rounded-full text-sm ${statusColor}`}>
              {complaint.status.replace('_', ' ')}
            </span>
            <span className="text-sm text-gray-500">
              {format(new Date(complaint.created_at), 'MMM d, yyyy')}
            </span>
          </div>
          <p className="text-sm text-gray-500">
            {complaint.is_anonymous ? 'Anonymous' : 'Registered User'}
          </p>
        </div>
        <StatusSelect complaint={complaint} />
      </div>

      <div className="space-y-4">
        <p className={`text-gray-700 ${!isExpanded && 'line-clamp-3'}`}>
          {complaint.content}
        </p>
        {complaint.content.length > 200 && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-indigo-600 hover:text-indigo-700 text-sm font-medium"
          >
            {isExpanded ? 'Show less' : 'Read more'}
          </button>
        )}
      </div>

      {complaint.admin_notes && (
        <div className="mt-4 pt-4 border-t">
          <div className="flex items-center space-x-2 text-gray-600 mb-2">
            <MessageSquare className="h-4 w-4" />
            <span className="text-sm font-medium">Admin Notes</span>
          </div>
          <p className="text-sm text-gray-600">{complaint.admin_notes}</p>
        </div>
      )}
    </div>
  );
}

export default ComplaintCard;