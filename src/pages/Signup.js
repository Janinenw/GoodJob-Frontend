// import { useState } from 'react';
// import { useSignup } from '../hooks/useSignup';

// const Signup = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const { signup, error, isLoading } = useSignup(process.env.REACT_APP_BASE_URL);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     await signup(name, email, password);
//   };

//   return (
//     <form className="signup" onSubmit={handleSubmit}>
//       <h3>Sign Up</h3>

//       <label>Name:</label>
//       <input
//         type="name"
//         onChange={(e) => setName(e.target.value)}
//         value={name}
//       />

//       <label>Email address:</label>
//       <input
//         type="email"
//         onChange={(e) => setEmail(e.target.value)}
//         value={email}
//       />

//       <label>Password:</label>
//       <input
//         type="password"
//         onChange={(e) => setPassword(e.target.value)}
//         value={password}
//       />

//       <button disabled={isLoading}>Sign up</button>
//       {error && <div className="error">{error}</div>}
//     </form>
//   );
// };

// export default Signup;

import React from 'react';
import SignupForm from '../components/SignUpForm';

const Signup = () => {
  return (
    <div>
     
      <SignupForm />
    </div>
  );
};

export default Signup;