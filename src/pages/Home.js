import React, { useEffect, useState } from 'react';
import { useJobsContext } from '../hooks/useJobsContext';
import { useAuthContext } from '../hooks/useAuthContext';
import JobDisplay from '../components/JobDisplay';
import JobForm from '../components/JobForm';

const Home = () => {
  const { jobs, dispatch } = useJobsContext();
  const { user } = useAuthContext();
  const [jobInEdit, setJobInEdit] = useState(null);
  const [showJobForm, setShowJobForm] = useState(false);

  useEffect(() => {
    if (!user) return;

    const fetchJobs = async () => {
      const response = await fetch(`${process.env.REACT_APP_BASE_URL}/jobs`, {
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
    const response = await fetch(`${process.env.REACT_APP_BASE_URL}/jobs/delete/${jobId}`, {
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
    setJobInEdit(job);
    setShowJobForm(true);
  };

  const handleAddJob = () => {
    setJobInEdit(null);
    setShowJobForm(true);
  };

  const handleCloseForm = () => {
    setShowJobForm(false);
  };

  const handleSubmit = async () => {
    if (!jobInEdit) return;

    try {
      const response = await fetch(`${process.env.REACT_APP_BASE_URL}/jobs/${jobInEdit._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${user.token}`,
        },
        body: JSON.stringify(jobInEdit),
      });

      if (!response.ok) {
        throw new Error('Failed to edit job');
      }

      const updatedJob = await response.json();
      dispatch({ type: 'EDIT_JOB', payload: { updatedJob } });
      handleCloseForm();
    } catch (error) {
      console.error('Failed to edit job:', error);
    }
  };

  return (
    <div className="home">
      <button onClick={handleAddJob} className="add-job-btn">Add New Job</button>
      {showJobForm && (
        <>
          <JobForm 
            job={jobInEdit || null}
            BASE_URL={process.env.REACT_APP_BASE_URL} 
            onSubmit={handleSubmit}
            onClose={handleCloseForm}
          />
          <button onClick={handleCloseForm} className="hide-form-btn">Hide Form</button>
        </>
      )}
      <div className="jobs">
        {jobs && jobs.map((job) => (
          <JobDisplay key={job._id} job={job} onDeleteJob={handleDeleteJob} onEditJob={handleEditJob} />
        ))}
      </div>
    </div>
  );
};

export default Home;