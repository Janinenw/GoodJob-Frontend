import { createContext, useReducer } from 'react';

export const JobsContext = createContext();

export const jobsReducer = (state, action) => {
  switch (action.type) {
    case 'SET_JOBS':
      return {
        jobs: action.payload,
      };
    case 'CREATE_JOB':
      return {
        jobs: [action.payload, ...state.jobs],
      };
    case 'DELETE_JOB':
      return {
        jobs: state.jobs.filter((j) => j._id !== action.payload._id),
      };
    case 'EDIT_JOB': {
      if (!action.payload) {
        return state;
      }

      return {
        jobs: state.jobs.map((job) =>
          job._id === action.payload._id ? action.payload : job
        ),
      };
    }
    case 'CLEAR_JOBS':
      return {
        jobs: [],
      };
    default:
      return state;
  }
};

export const JobsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(jobsReducer, {
    jobs: [],
  });

  const editJob = (updatedJob) => {
    dispatch({ type: 'EDIT_JOB', payload: { updatedJob } });
  };

  console.log('JobsContext state:', state);

  return (
    <JobsContext.Provider value={{ ...state, dispatch, editJob }}>
      {children}
    </JobsContext.Provider>
  );
};