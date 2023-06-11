import React, { useState, useEffect } from "react";
import { useJobsContext } from "../hooks/useJobsContext";
import { useAuthContext } from '../hooks/useAuthContext';
import { jokes } from '../Jokes'; 
// import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import './JobForm.css'

const JobForm = ({ job = null, BASE_URL, onSubmit, onClose }) => {
  const { dispatch } = useJobsContext();
  const { user } = useAuthContext();
  const [joke, setJoke] = useState('');
  const [rewardChecked, setRewardChecked] = useState(false);
  const [image, setImage] = useState('');
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
  const [showJokeModal, setShowJokeModal] = useState(false);

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

  const fetchDogImage = async () => {
    const responseImage = await fetch('https://dog.ceo/api/breeds/image/random');
    const jsonImage = await responseImage.json();
    setImage(jsonImage.message);
  
  }

  const handleFinalResultChange = async (e) => {
    const value = e.target.value;
    setFinalResult(value);

    if (value === 'Rejected') {
      await fetchDogImage();
    } else {
      setImage(''); 
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!user) {
      setError('You must be logged in');
      return;
    }
  
    const requiredFields = [];
    if (!company) requiredFields.push('company');
    if (!position) requiredFields.push('position');
    if (!appStatus) requiredFields.push('appStatus');
    if (!finalResult) requiredFields.push('finalResult');
  
    if (requiredFields.length > 0) {
      setError('Server error... serving incomplete form realness. Please complete outlined fields.');
      setEmptyFields(requiredFields);
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
  
    const url = job ? `${BASE_URL}/jobs/edit/${job._id}` : `${BASE_URL}/jobs/create`;
    const method = job ? 'PUT' : 'POST';
    const action = job ? 'EDIT_JOB' : 'CREATE_JOB';
  
    const response = await fetch(url, {
      method,
      body: JSON.stringify(jobData),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user.token}`,
      },
    });
    const json = await response.json();
  
    if (!response.ok) {
      setError(json.error);
      setEmptyFields(json.emptyFields || []);
      return;
    }
  
    
   
    if (rewardChecked) {
      const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
      setJoke(randomJoke);
      setShowJokeModal(true);
    }

    if (response.ok && finalResult === 'Rejected') {
      const responseImage = await fetch('https://dog.ceo/api/breeds/image/random');
      const jsonImage = await responseImage.json();
      setImage(jsonImage.message);
    }

    
    if (response.ok && finalResult === 'Rejected') {
      const responseImage = await fetch('https://dog.ceo/api/breeds/image/random');
      const jsonImage = await responseImage.json();
      setImage(jsonImage.message);
    }
  
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
  };

  const appStatusOptions = ['Sent', 'Working On', 'Next Round'];
  
  return (

      <div>
        <form onSubmit={handleSubmit}>
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
    onChange={handleFinalResultChange}
    value={finalResult}
    className={emptyFields.includes('finalResult') ? 'form-control is-invalid' : 'form-control'}
  >
    <option value="">-- Select --</option>
    <option value="Accepted">Accepted</option>
    <option value="Rejected">Rejected</option>
    <option value="N/A but it will be!">N/A But it will be!</option>
    <option value="Did not hear back, company can go suck an egg" >Did not hear back, company can go suck an egg</option>
  </select>
</div>


        <div className="form-group form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="rewardCheck"
            checked={rewardChecked}
            onChange={() => setRewardChecked(!rewardChecked)}
          />
          <label className="form-check-label" htmlFor="rewardCheck">
            Check yes for reward
          </label>
        </div>

        <button className={job ? 'btn btn-primary' : 'btn btn-success job-button'}>
  {job ? 'Update Job' : 'ADD. THAT. JOB.'}
</button>


  {error && <div className="alert alert-danger mt-3">{error}</div>}
      </form>
     

      <Modal show={showJokeModal} onHide={() => setShowJokeModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Party Time!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {joke}
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-secondary" onClick={() => setShowJokeModal(false)}>
            Close
          </button>
        </Modal.Footer>
      </Modal>

      {finalResult === 'Rejected' && image && (
        <div className="mt-3">
          <p>Here's a cute dog to cheer you up!</p>
          <img src={image} alt="A random dog" />
        </div>
      )}
    </div>
  );
      }


export default JobForm;

