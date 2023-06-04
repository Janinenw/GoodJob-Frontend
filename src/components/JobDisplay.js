import React from 'react';
import { useAuthContext } from '../hooks/useAuthContext';

const JobDisplay = ({ job, onDeleteJob, onEditJob }) => {
  const { user } = useAuthContext();

  const handleClick = async () => {
    if (!user) {
      return;
    }

    onDeleteJob(job._id); 
  };
 
  const handleEditClick = () => {
    onEditJob(job);
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
      
          <span className="" onClick={handleClick}>Delete</span>
          <button onClick={handleEditClick}>Edit</button>
        </div>
      );
};
    
export default JobDisplay; 