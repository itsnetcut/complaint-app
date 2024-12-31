import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import supabase from '../../../../utils/supabase';
import FormField from '../../../components/FormField';

function ComplaintForm() {
  const navigate = useNavigate();
  const [isAnonymous, setIsAnonymous] = useState(false);
const [submitWithoutEmail, setSubmitWithoutEmail] = useState(false);
  const [content, setContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
const response = await fetch('https://boxpsqcgmzdrijbmclkp.supabase.co/rest/v1/complaints', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_JWT_TOKEN',
    'Prefer': 'return=representation'
  },
  body: JSON.stringify({
    content,
    is_anonymous: isAnonymous,
    email: submitWithoutEmail ? null : ''
  })
});

const data = await response.json();
console.log(data);

      // Remove this line
      navigate('/');
    } catch (err) {
      console.error('Error submitting complaint:', err);
      setError('Failed to submit complaint. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6">
      <FormField
        label="Complaint Details"
        error={error}
      >
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full h-40 px-3 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="Describe your complaint in detail..."
          required
        />
      </FormField>

      <div className="mt-4">
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={submitWithoutEmail}
            onChange={(e) => setSubmitWithoutEmail(e.target.checked)}
            className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
          />
          <span className="text-gray-700">Submit without email</span>
        </label>
      </div>

      <div className="mt-4">
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={isAnonymous}
            onChange={(e) => setIsAnonymous(e.target.checked)}
            className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
          />
          <span className="text-gray-700">Submit anonymously</span>
        </label>
      </div>

      <div className="mt-6">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Submitting...' : 'Submit Complaint'}
        </button>
      </div>
    </form>
  );
}

export default ComplaintForm;
