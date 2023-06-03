import { createContext, useReducer } from 'react'

export const JobsContext = createContext()

export const jobsReducer = (state, action) => {
  switch (action.type) {
    case 'SET_JOB': 
      return {
        jobs: action.payload
      }
    case 'CREATE_JOB':
      return {
        jobs: [action.payload, ...state.jobs]
      }
    case 'DELETE_JOB':
      return {
        jobs: state.jobs.filter((w) => w._id !== action.payload._id)
      }
      
    default:
      return state
  }
}

export const JobsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(jobsReducer, {
    jobs: [] //initialized as empty array instead of null, remember to go back and change this if bug 
  })

  return (
    <JobsContext.Provider value={{...state, dispatch}}>
      { children }
    </JobsContext.Provider>
  )
}