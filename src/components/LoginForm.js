import { useState } from "react";
import { useLogin } from "../hooks/useLogin";
import './LogInForm.css';  

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, isLoading } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h3 className="login-heading">Log In</h3>

        <div className="login-input-group">
          <label>Email address:</label>
          <input 
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className="login-input-group">
          <label>Password:</label>
          <input 
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <button className="login-button" disabled={isLoading}>
          Log in
        </button>
      </form>
    </div>
  );
};

export default Login;

