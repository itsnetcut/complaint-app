import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import type { Complaint } from '../types/complaint';

export function useComplaints() {
  const [complaints, setComplaints] = useState<Complaint[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchComplaints() {
      try {
        const { data, error: fetchError } = await supabase
          .from('complaints')
          .select('*')
          .order('created_at', { ascending: false });

        if (fetchError) throw fetchError;
        setComplaints(data || []);
      } catch (err) {
        console.error('Error fetching complaints:', err);
        setError(err instanceof Error ? err : new Error('Failed to fetch complaints'));
      } finally {
        setLoading(false);
      }
    }

    fetchComplaints();

    // Subscribe to changes
    const channel = supabase
      .channel('complaints_changes')
      .on('postgres_changes', 
        { event: '*', schema: 'public', table: 'complaints' },
        () => fetchComplaints()
      )
      .subscribe();

    return () => {
      channel.unsubscribe();
    };
  }, []);

  return { complaints, loading, error };
}