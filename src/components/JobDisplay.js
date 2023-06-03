// import React from 'react';
// import { useJobsContext } from '../hooks/useJobsContext';
// import { useAuthContext } from '../hooks/useAuthContext';

// const JobDisplay = ({ job }) => {
//   const { dispatch } = useJobsContext();
//   const { user } = useAuthContext();

//   const handleClick = async () => {
//     if (!user) {
//       return;
//     }

//     const response = await fetch(`http://localhost:4000/jobs/delete/${job._id}`, {
//       method: 'DELETE',
//       headers: {
//         'Authorization': `Bearer ${user.token}`
//       }
//     });
//     const json = await response.json();

//     if (response.ok) {
//       dispatch({ type: 'DELETE_JOB', payload: json });
//     }
//   };

//   return (
//     <div className="job-details">
//       <h4>{job.company}</h4>
//       <p><strong>Position: </strong>{job.position}</p>
//       <p><strong>Application Status: </strong>{job.appStatus}</p>
//       <p><strong>Next Steps: </strong>{job.nextSteps}</p>
//       <p><strong>Deadline: </strong>{job.deadline}</p>
//       <p><strong>Date Applied: </strong>{job.dateApplied}</p>
//       <p><strong>Important Date: </strong>{job.importantDate}</p>
//       <p><strong>Notes: </strong>{job.notes}</p>
//       <p><strong>Final Result: </strong>{job.finalResult}</p>
  
//       <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
//     </div>
//   );
// };

// export default JobDisplay; 


import React from 'react';
import { useAuthContext } from '../hooks/useAuthContext';

const JobDisplay = ({ job, onDeleteJob }) => {
  const { user } = useAuthContext();

  const handleClick = async () => {
    if (!user) {
      return;
    }

    const response = await fetch(`http://localhost:4000/jobs/delete/${job._id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${user.token}`
      }
    });

    if (response.ok) {
      onDeleteJob(job._id); // Call the onDeleteJob callback to update the job list
    }
  };

  return (
        <div className="job-details">
          <h4>{job.company}</h4>
          <p><strong>Position: </strong>{job.position}</p>
          <p><strong>Application Status: </strong>{job.appStatus}</p>
          <p><strong>Next Steps: </strong>{job.nextSteps}</p>
          <p><strong>Deadline: </strong>{job.deadline}</p>
          <p><strong>Date Applied: </strong>{job.dateApplied}</p>
          <p><strong>Important Date: </strong>{job.importantDate}</p>
          <p><strong>Notes: </strong>{job.notes}</p>
          <p><strong>Final Result: </strong>{job.finalResult}</p>
      
          <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
        </div>
      );
    };
    
    export default JobDisplay; 
    