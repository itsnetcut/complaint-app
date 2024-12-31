import { useState, useEffect } from 'react';
import { supabase } from '../../../lib/supabase';
import type { Complaint } from '../../../types/complaint';

export function useComplaints() {
  const [complaints, setComplaints] = useState<Complaint[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchComplaints = async () => {
      try {
        const { data, error } = await supabase
          .from('complaints')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) throw error;
        setComplaints(data);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('An error occurred'));
      } finally {
        setLoading(false);
      }
    };

    fetchComplaints();

    // Subscribe to changes
    const subscription = supabase
      .channel('complaints_changes')
      .on('postgres_changes', 
        { event: '*', schema: 'public', table: 'complaints' },
        fetchComplaints
      )
      .subscribe();

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return { complaints, loading, error };
}