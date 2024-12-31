import React from 'react';
import { UserPlus } from 'lucide-react';

function RegisterHeader() {
  return (
    <div className="text-center">
      <UserPlus className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Create Account</h1>
      <p className="text-gray-600">
        Join us to track your complaints and receive updates
      </p>
    </div>
  );
}

export default RegisterHeader;