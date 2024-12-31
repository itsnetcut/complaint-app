import { useState, useEffect } from 'react';
import supabase from '../../utils/supabase';
import type { Complaint } from '../types/complaint';

export function useComplaints() {
  const [complaints, setComplaints] = useState<Complaint[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
useEffect(() => {
  if (error) {
    console.error('Error fetching complaints:', error);
  }
}, [error]);

  useEffect(() => {
    async function fetchComplaints() {
try {
  console.log('Fetching complaints...');
const response = await fetch('https://boxpsqcgmzdrijbmclkp.supabase.co/rest/v1/complaints', {
  method: 'GET',
  headers: {
    'apikey': import.meta.env.VITE_SUPABASE_ANON_KEY,
    'Authorization': `Bearer ${localStorage.getItem('supabase_token')}`,
    'Content-Type': 'application/json'
  }
});

const data = await response.json();
console.log(data);
  console.log('Complaints fetched:', data);

        // Remove this line
        setComplaints(data.data);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('An error occurred'));
      } finally {
        setLoading(false);
      }
    }

    fetchComplaints();
  }, []);

  return { complaints, loading, error };
}
