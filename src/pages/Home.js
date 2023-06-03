import { useEffect }from 'react'
import { useJobsContext } from "../hooks/useJobsContext"
import { useAuthContext } from "../hooks/useAuthContext"



import JobDisplay from '../components/JobDisplay'
import JobForm from '../components/JobForm'

const Home = () => {
  const {jobs, dispatch} = useJobsContext()
  const {user} = useAuthContext()

  useEffect(() => {
    const fetchJobs = async () => {
      const response = await fetch('http://localhost:4000/jobs', {
        headers: {'Authorization': `Bearer ${user.token}`},
      })
      const json = await response.json()

      if (response.ok) {
        dispatch({type: 'SET_JOBS', payload: json})
      }
    }

    if (user) {
      fetchJobs()
    }
  }, [dispatch, user])

  return (
    <div className="home">
      <div className="jobs">
        {jobs && jobs.map((job) => (
          <JobDisplay key={job._id} job={job} />
        ))}
      </div>
      <JobForm />
    </div>
  )
}

export default Home

