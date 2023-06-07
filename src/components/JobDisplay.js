import React, { useState } from 'react';
import { useAuthContext } from '../hooks/useAuthContext';
import 'bootstrap/dist/css/bootstrap.min.css';

const JobDisplay = ({ job, onDeleteJob, onEditJob }) => {
  const { user } = useAuthContext();
  const [layout, setLayout] = useState('rows');

  const handleClick = async () => {
    if (!user) {
      return;
    }

    onDeleteJob(job._id);
  };

  const handleEditClick = () => {
    onEditJob(job);
  };

  const toggleLayout = () => {
    setLayout(prevLayout => prevLayout === 'rows' ? 'columns' : 'rows');
  };

  return (
    <div className="container">
      <button className="btn btn-primary mb-3" onClick={toggleLayout}>
        Toggle Layout
      </button>
      
      {layout === 'rows' ? (
        <table className="table table-striped table-bordered">
          <tbody>
            <tr>
              <th>Company</th>
              <td>{job.company}</td>
            </tr>
            <tr>
              <th>Position</th>
              <td>{job.position}</td>
            </tr>
            <tr>
              <th>Application Status</th>
              <td>{job.appStatus}</td>
            </tr>
            <tr>
              <th>Next Steps</th>
              <td>{job.nextSteps}</td>
            </tr>
            <tr>
              <th>Deadline</th>
              <td>{job.deadline}</td>
            </tr>
            <tr>
              <th>Date Applied</th>
              <td>{job.dateApplied}</td>
            </tr>
            <tr>
              <th>Important Date</th>
              <td>{job.importantDate}</td>
            </tr>
            <tr>
              <th>Notes</th>
              <td>{job.notes}</td>
            </tr>
            <tr>
              <th>Final Result</th>
              <td>{job.finalResult}</td>
            </tr>
          </tbody>
        </table>
      ) : (
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Company</th>
              <th>Position</th>
              <th>Application Status</th>
              <th>Next Steps</th>
              <th>Deadline</th>
              <th>Date Applied</th>
              <th>Important Date</th>
              <th>Notes</th>
              <th>Final Result</th>
              <th></th>
              <th></th>
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
                <button className="btn btn-danger" onClick={handleClick}>Delete</button>
              </td>
              <td>
                <button className="btn btn-primary" onClick={handleEditClick}>Edit</button>
              </td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default JobDisplay;



