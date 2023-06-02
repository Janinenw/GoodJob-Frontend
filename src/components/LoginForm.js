// import React, { useState } from 'react';

// function LoginForm({ onLogin }) {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onLogin({ email, password });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
//       <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
//       <button type="submit">Login</button>
//     </form>
//   );
// }

// export default LoginForm;

// alert to successful login- then hit job displaty

import React, { useState, useContext } from 'react';
import LoginForm from './LoginForm';
import { UserContext } from '../App';

function Login() {
  const { setUser } = useContext(UserContext);

  const handleLogin = async (credentials) => {
    try {
      const response = await fetch('http://localhost:4000/user/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials)
      });

      if (response.ok) {
        const user = await response.json();
        console.log(user); // Add this line
        setUser(user);
      }
      } else {
        // Handle error
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return <LoginForm onLogin={handleLogin} />;
}

export default Login;