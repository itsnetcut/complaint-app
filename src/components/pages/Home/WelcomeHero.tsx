import React from 'react';
import { Link } from 'react-router-dom';
import { FileText } from 'lucide-react';

function WelcomeHero() {
  return (
    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg text-white p-8">
      <div className="max-w-3xl mx-auto text-center">
        <FileText className="h-16 w-16 mx-auto mb-4" />
        <h1 className="text-4xl font-bold mb-4">
          Welcome to Bangladesh Public Complaints Portal
        </h1>
        <p className="text-lg mb-6">
          Your voice matters. Submit complaints about government services and help improve our nation.
        </p>
        <Link
          to="/submit"
          className="inline-block bg-white text-indigo-600 px-6 py-3 rounded-md font-semibold hover:bg-indigo-50 transition-colors"
        >
          Submit a Complaint
        </Link>
      </div>
    </div>
  );
}

export default WelcomeHero;