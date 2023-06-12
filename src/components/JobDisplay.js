import React from 'react';
import { useAuthContext } from '../hooks/useAuthContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import './JobDisplay.css';


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
    <div>
     
      <div className="container">
        <table className="table table-striped table-bordered fixed-layout">
          <thead>
            <tr>
              <th className="col-width">Company</th>
              <th className="col-width">Position</th>
              <th className="col-width">Application Status</th>
              <th className="col-width">Next Steps</th>
              <th className="col-width">Deadline</th>
              <th className="col-width">Date Applied</th>
              <th className="col-width">Important Date</th>
              <th className="col-width">Notes</th>
              <th className="col-width">Final Result</th>
              <th className="col-width"></th>
              <th className="col-width"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{job.company}</td>
              <td>{job.position}</td>
              <td>{job.appStatus}</td>
              <td>{job.nextSteps}</td>
              <td>{job.deadline}</td>
              <td>{job.dateApplied}</td>
              <td>{job.importantDate}</td>
              <td>{job.notes}</td>
              <td>{job.finalResult}</td>
              <td>
              <button className="btn btn-edit" onClick={handleEditClick}>Edit</button>
              </td>
              <td>
              <button className="btn btn-delete" onClick={handleClick}>Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default JobDisplay;