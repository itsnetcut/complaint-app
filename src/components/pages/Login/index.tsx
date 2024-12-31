import React from 'react';
import LoginForm from './LoginForm';
import LoginHeader from './LoginHeader';

function Login() {
  return (
    <div className="max-w-md mx-auto space-y-8">
      <LoginHeader />
      <LoginForm />
    </div>
  );
}

export default Login;