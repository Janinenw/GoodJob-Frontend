import React, { useState, useEffect } from "react";
import { useJobsContext } from "../hooks/useJobsContext";
import { useAuthContext } from '../hooks/useAuthContext';
import { jokes } from '../Jokes'; 
import 'bootstrap/dist/css/bootstrap.min.css';

const JobForm = ({ job = null, BASE_URL, onSubmit, onClose }) => {
  const { dispatch } = useJobsContext();
  const { user } = useAuthContext();
  const [joke, setJoke] = useState('');
  const [company, setCompany] = useState(job ? job.company : '');
  const [position, setPosition] = useState(job ? job.position : '');
  const [appStatus, setAppStatus] = useState(job ? job.appStatus : '');
  const [nextSteps, setNextSteps] = useState(job ? job.nextSteps : '');
  const [deadline, setDeadline] = useState(job ? job.deadline : '');
  const [dateApplied, setDateApplied] = useState(job ? job.dateApplied : '');
  const [importantDate, setImportantDate] = useState(job ? job.importantDate : '');
  const [notes, setNotes] = useState(job ? job.notes : '');
  const [finalResult, setFinalResult] = useState(job ? job.finalResult : '');
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);
  const [showJoke, setShowJoke] = useState(false);

  useEffect(() => {
    if (job) {
      setCompany(job.company);
      setPosition(job.position);
      setAppStatus(job.appStatus);
      setNextSteps(job.nextSteps);
      setDeadline(job.deadline);
      setDateApplied(job.dateApplied);
      setImportantDate(job.importantDate);
      setNotes(job.notes);
      setFinalResult(job.finalResult);
    }
  }, [job]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      setError('You must be logged in');
      return;
    }

    const jobData = {
      company,
      position,
      appStatus,
      nextSteps,
      deadline,
      dateApplied,
      importantDate,
      notes,
      finalResult,
    };

    const url = job
      ? `${BASE_URL}/jobs/edit/${job._id}`
      : `${BASE_URL}/jobs/create`;
    const method = job ? 'PUT' : 'POST';
    const action = job ? 'EDIT_JOB' : 'CREATE_JOB';

    const response = await fetch(url, {
      method,
      body: JSON.stringify(jobData),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${user.token}`
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
      setEmptyFields(json.emptyFields || []);
    }
    if (response.ok) {
      setCompany('');
      setPosition('');
      setAppStatus('');
      setNextSteps('');
      setDeadline('');
      setDateApplied('');
      setImportantDate('');
      setNotes('');
      setFinalResult('');
      setError(null);
      setEmptyFields([]);
      setShowJoke(true);
      dispatch({ type: action, payload: json });
    }
  };

  const appStatusOptions = ['Sent', 'Waiting', 'Next Round'];

  const handleJokeButtonClick = () => {
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    setJoke(randomJoke);
  };

  return (
    <div className="container">
      <form className="mt-5" onSubmit={handleSubmit}>
        <h3 className="mb-4">{job ? 'Edit Job' : 'Add a New Job'}</h3>

        <div className="form-group">
          <label>Company:</label>
          <input
            type="text"
            onChange={(e) => setCompany(e.target.value)}
            value={company}
            className={emptyFields.includes('company') ? 'form-control is-invalid' : 'form-control'}
          />
        </div>

        <div className="form-group">
          <label>Position:</label>
          <input
            type="text"
            onChange={(e) => setPosition(e.target.value)}
            value={position}
            className={emptyFields.includes('position') ? 'form-control is-invalid' : 'form-control'}
          />
        </div>

        <div className="form-group">
          <label>Application Status:</label>
          <select
            onChange={(e) => setAppStatus(e.target.value)}
            value={appStatus}
            className={emptyFields.includes('appStatus') ? 'form-control is-invalid' : 'form-control'}
          >
            <option value="">-- Select --</option>
            {appStatusOptions.map((status, index) => (
              <option key={index} value={status}>
                {status}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Next Steps:</label>
          <input
            type="text"
            onChange={(e) => setNextSteps(e.target.value)}
            value={nextSteps}
            className={emptyFields.includes('nextSteps') ? 'form-control is-invalid' : 'form-control'}
          />
        </div>

        <div className="form-group">
          <label>Deadline:</label>
          <input
            type="date"
            onChange={(e) => setDeadline(e.target.value)}
            value={deadline}
            className={emptyFields.includes('deadline') ? 'form-control is-invalid' : 'form-control'}
          />
        </div>

        <div className="form-group">
          <label>Date Applied:</label>
          <input
            type="date"
            onChange={(e) => setDateApplied(e.target.value)}
            value={dateApplied}
            className={emptyFields.includes('dateApplied') ? 'form-control is-invalid' : 'form-control'}
          />
        </div>

        <div className="form-group">
          <label>Important Date:</label>
          <input
            type="date"
            onChange={(e) => setImportantDate(e.target.value)}
            value={importantDate}
            className={emptyFields.includes('importantDate') ? 'form-control is-invalid' : 'form-control'}
          />
        </div>

        <div className="form-group">
          <label>Notes:</label>
          <textarea
            onChange={(e) => setNotes(e.target.value)}
            value={notes}
            className={emptyFields.includes('notes') ? 'form-control is-invalid' : 'form-control'}
          ></textarea>
        </div>

        <div className="form-group">
          <label>Final Result:</label>
          <select
            onChange={(e) => setFinalResult(e.target.value)}
            value={finalResult}
            className={emptyFields.includes('finalResult') ? 'form-control is-invalid' : 'form-control'}
          >
            <option value="">-- Select --</option>
            <option value="Accepted">Accepted</option>
            <option value="Rejected">Rejected</option>
          </select>
        </div>

        <button className={job ? 'btn btn-primary' : 'btn btn-success'}>
          {job ? 'Update Job' : 'Add Job'}
        </button>

        {error && <div className="alert alert-danger mt-3">{error}</div>}
      </form>

      {showJoke && joke && (
        <div className="mt-3">
          <p>{joke}</p>
          <button className="btn btn-primary" onClick={handleJokeButtonClick}>
            Show Another Joke
          </button>
        </div>
      )}
    </div>
  );
};

export default JobForm;
