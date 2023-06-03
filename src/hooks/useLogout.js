import { useAuthContext } from './useAuthContext'
import { useJobsContext } from './useJobsContext'

export const useLogout = () => {
  const { dispatch } = useAuthContext()
  const { dispatch: dispatchJobs } = useJobsContext()

  const logout = () => {

    localStorage.removeItem('user')

   
    dispatch({ type: 'LOGOUT' })
    dispatchJobs({ type: 'SET_=JOBS', payload: null })
  }

  return { logout }
}

// logs user out by removing user data locally--> dispatch funciton- updates user state back to null

// clears the job state by setting it to null- 