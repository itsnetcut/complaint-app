import React from 'react';
import { Shield } from 'lucide-react';

function SubmitHeader() {
  return (
    <div className="text-center">
      <Shield className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Submit a Complaint</h1>
      <p className="text-gray-600">
        Your complaint will be reviewed by our administrators. You can choose to remain anonymous.
      </p>
    </div>
  );
}

export default SubmitHeader;