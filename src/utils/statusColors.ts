import type { ComplaintStatus } from '../types/complaint';

export function getStatusColor(status: ComplaintStatus): string {
  const colors = {
    pending: 'bg-yellow-100 text-yellow-800',
    in_progress: 'bg-blue-100 text-blue-800',
    resolved: 'bg-green-100 text-green-800',
    rejected: 'bg-red-100 text-red-800'
  };

  return colors[status];
}