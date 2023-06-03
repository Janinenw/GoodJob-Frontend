import { useState } from "react"
import {useLogin} from "../hooks/useLogin"

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {login, error, isLoading} = useLogin()

  const handleSubmit = async (e) => {
    e.preventDefault()

    await login(email, password)
  }

  return (
    <form className="login" onSubmit={handleSubmit}>
      <h3>Log In</h3>
      
      <label>Email address:</label>
      <input 
        type="email" 
        onChange={(e) => setEmail(e.target.value)} 
        value={email} 
      />
      <label>Password:</label>
      <input 
        type="password" 
        onChange={(e) => setPassword(e.target.value)} 
        value={password} 
      />

<     button disabled={isLoading}>Log in</button>
    </form>
  )
}

export default Login

// user fills out email and password form- on click of button, handle submit --> this then calls login from the useLogin hook- starts process- users credent. passed to the login functions- handles API request-- login state then gets updated