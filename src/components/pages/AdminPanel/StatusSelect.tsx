import React from 'react';
import { supabase } from '../../lib/supabase';
import type { Complaint, ComplaintStatus } from '../../types/complaint';

interface StatusSelectProps {
  complaint: Complaint;
}

function StatusSelect({ complaint }: StatusSelectProps) {
  const handleStatusChange = async (status: ComplaintStatus) => {
    try {
      const { error } = await supabase
        .from('complaints')
        .update({ status })
        .eq('id', complaint.id);

      if (error) throw error;
    } catch (err) {
      console.error('Error updating status:', err);
    }
  };

  return (
    <select
      value={complaint.status}
      onChange={(e) => handleStatusChange(e.target.value as ComplaintStatus)}
      className="px-3 py-1.5 border rounded-md text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
    >
      <option value="pending">Pending</option>
      <option value="in_progress">In Progress</option>
      <option value="resolved">Resolved</option>
      <option value="rejected">Rejected</option>
    </select>
  );
}

export default StatusSelect;