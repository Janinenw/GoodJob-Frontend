import { useState, useEffect } from "react";
import { useJobsContext } from "../hooks/useJobsContext";
import { useAuthContext } from '../hooks/useAuthContext';

const JobForm = ({ job = null, BASE_URL }) => {
  const { dispatch } = useJobsContext();
  const { user } = useAuthContext();

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
      dispatch({ type: action, payload: json });
    }
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>{job ? 'Edit Job' : 'Add a New Job'}</h3>

      <label>Company:</label>
      <input
        type="text"
        onChange={(e) => setCompany(e.target.value)}
        value={company}
        className={emptyFields.includes('company') ? 'error' : ''}
      />

      <label>Position:</label>
      <input
        type="text"
        onChange={(e) => setPosition(e.target.value)}
        value={position}
        className={emptyFields.includes('position') ? 'error' : ''}
      />

      <label>Application Status:</label>
      <input
        type="text"
        onChange={(e) => setAppStatus(e.target.value)}
        value={appStatus}
        className={emptyFields.includes('appStatus') ? 'error' : ''}
      />

      <label>Next Steps:</label>
      <input
        type="text"
        onChange={(e) => setNextSteps(e.target.value)}
        value={nextSteps}
        className={emptyFields.includes('nextSteps') ? 'error' : ''}
      />

      <label>Deadline:</label>
      <input
        type="text"
        onChange={(e) => setDeadline(e.target.value)}
        value={deadline}
        className={emptyFields.includes('deadline') ? 'error' : ''}
      />

      <label>Date Applied:</label>
      <input
        type="date"
        onChange={(e) => setDateApplied(e.target.value)}
        value={dateApplied}
        className={emptyFields.includes('dateApplied') ? 'error' : ''}
      />

      <label>Important Date:</label>
      <input
        type="text"
        onChange={(e) => setImportantDate(e.target.value)}
        value={importantDate}
        className={emptyFields.includes('importantDate') ? 'error' : ''}
      />

      <label>Notes:</label>
      <textarea
        onChange={(e) => setNotes(e.target.value)}
        value={notes}
        className={emptyFields.includes('notes') ? 'error' : ''}
      ></textarea>

      <label>Final Result:</label>
      <select
        onChange={(e) => setFinalResult(e.target.value)}
        value={finalResult}
        className={emptyFields.includes('finalResult') ? 'error' : ''}
      >
        <option value="">-- Select --</option>
        <option value="Accepted">Accepted</option>
        <option value="Rejected">Rejected</option>
      </select>

      <button>{job ? 'Update Job' : 'Add Job'}</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default JobForm;