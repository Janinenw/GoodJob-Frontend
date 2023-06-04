import { useState } from 'react'
import { useAuthContext } from './useAuthContext'

export const useSignup = (BASE_URL) => { 
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const { dispatch } = useAuthContext()

  const signup = async (name, email, password) => {
    setIsLoading(true)
    setError(null)

    const response = await fetch(`${BASE_URL}/user`, { 
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ name, email, password }) 
    })
    const json = await response.json()

    if (!response.ok) {
      setIsLoading(false)
      setError(json.error)
    }
    if (response.ok) {
      localStorage.setItem('user', JSON.stringify(json))
      dispatch({type: 'LOGIN', payload: json})
      setIsLoading(false)
    }
  }

  return { signup, isLoading, error }
}

export default useSignup;
// this hook takes name, email, password, sends POST request to backend to create new user.  data stored- auth state updated with dispatch 
