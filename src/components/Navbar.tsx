import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, LogIn, UserPlus } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';

function Navbar() {
  const { user, signOut } = useAuth();

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <FileText className="h-6 w-6 text-indigo-600" />
            <span className="font-bold text-xl">Public Complaints</span>
          </Link>

          <div className="flex items-center space-x-4">
            <Link
              to="/submit"
              className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
            >
              Submit Complaint
            </Link>

            {!user ? (
              <>
                <Link to="/login" className="flex items-center space-x-1 text-gray-600 hover:text-indigo-600">
                  <LogIn className="h-5 w-5" />
                  <span>Login</span>
                </Link>
                <Link to="/register" className="flex items-center space-x-1 text-gray-600 hover:text-indigo-600">
                  <UserPlus className="h-5 w-5" />
                  <span>Register</span>
                </Link>
              </>
            ) : (
              <button
                onClick={() => signOut()}
                className="text-gray-600 hover:text-indigo-600"
              >
                Sign Out
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;