import React from 'react';
import { LogIn } from 'lucide-react';

function LoginHeader() {
  return (
    <div className="text-center">
      <LogIn className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h1>
      <p className="text-gray-600">
        Sign in to track your complaints and get updates
      </p>
    </div>
  );
}

export default LoginHeader;