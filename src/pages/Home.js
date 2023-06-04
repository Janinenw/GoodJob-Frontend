import React, { useEffect, useState } from 'react';
import { useJobsContext } from '../hooks/useJobsContext';
import { useAuthContext } from '../hooks/useAuthContext';
import JobDisplay from '../components/JobDisplay';
import JobForm from '../components/JobForm';

const Home = () => {
  const { jobs, dispatch } = useJobsContext();
  const { user } = useAuthContext();
  const [editedJob, setEditedJob] = useState(null);

  useEffect(() => {
    if (!user) return;

    const fetchJobs = async () => {
      const response = await fetch('http://localhost:4000/jobs', {
        headers: { 'Authorization': `Bearer ${user.token}` },
      });
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: 'SET_JOBS', payload: json });
      }
    };

    fetchJobs();
  }, [dispatch, user]);

  const handleDeleteJob = async (jobId) => {
    const response = await fetch(`http://localhost:4000/jobs/delete/${jobId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${user.token}`
      }
    });

    if (response.ok) {
      dispatch({ type: 'DELETE_JOB', payload: { _id: jobId } });
    }
  };

  const handleEditJob = (job) => {
    setEditedJob(job);
  };

  const submitJobEdit = async (job) => {
    try {
      const response = await fetch(`http://localhost:4000/jobs/${job._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${user.token}`,
        },
        body: JSON.stringify(job),
      });

      if (!response.ok) {
        throw new Error('Failed to edit job');
      }

      const updatedJob = await response.json();
      dispatch({ type: 'EDIT_JOB', payload: { updatedJob } });
      setEditedJob(null);
    } catch (error) {
      console.error('Failed to edit job:', error);
    }
  };

  return (
    <div className="home">
      <div className="jobs">
        {jobs && jobs.map((job) => (
          <JobDisplay key={job._id} job={job} onDeleteJob={handleDeleteJob} onEditJob={handleEditJob} />
        ))}
      </div>
      <JobForm job={editedJob} onSubmit={submitJobEdit} />
    </div>
  );
};

export default Home;