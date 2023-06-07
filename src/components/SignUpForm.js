import React from 'react';
import { useState } from 'react';
import { useSignup } from '../hooks/useSignup';
import './SignUpForm.css';

const SignupForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signup, error, isLoading } = useSignup(process.env.REACT_APP_BASE_URL);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(name, email, password);
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h3 className="signup-heading">Sign Up</h3>

        <div className="signup-input-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>

        <div className="signup-input-group">
          <label htmlFor="email">Email address:</label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className="signup-input-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <button className="signup-button" disabled={isLoading}>
          Sign up
        </button>

        {error && <div className="signup-error">{error}</div>}
      </form>
    </div>
  );
};

export default SignupForm;