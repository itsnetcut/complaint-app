import React from 'react';
import RegisterForm from './RegisterForm';
import RegisterHeader from './RegisterHeader';

function Register() {
  return (
    <div className="max-w-md mx-auto space-y-8">
      <RegisterHeader />
      <RegisterForm />
    </div>
  );
}

export default Register;