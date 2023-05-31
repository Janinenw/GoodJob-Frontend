import React, { useContext } from 'react';
import { UserContext } from '../App';
import SignupForm from '../components/SignupForm';

function Signup() {
  const { setUser } = useContext(UserContext);

  const handleRegister = async ({ name, email, password }) => {
    const result = await fetch('http://localhost:4000/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name, email, password
      })
    }).then((res) => res.json());

    setUser(result);
  };

  return (
    <SignupForm onRegister={handleRegister} />
  );
}

export default Signup;