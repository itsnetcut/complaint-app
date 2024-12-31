export type ComplaintStatus = 'pending' | 'in_progress' | 'resolved' | 'rejected';

export interface Complaint {
  id: string;
  content: string;
  status: ComplaintStatus;
  created_at: string;
  user_id?: string;
  is_anonymous: boolean;
  admin_notes?: string;
}