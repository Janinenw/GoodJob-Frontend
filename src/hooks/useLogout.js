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