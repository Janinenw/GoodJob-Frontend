import React, { useState, useContext } from 'react';
import { UserContext } from '../App'; 
import axios from 'axios'; 

const JobForm = () => {
  const { user } = useContext(UserContext); 
  const [form, setForm] = useState({
    company: '',
    position: '',
    appStatus: 'Sent',
    nextSteps: '',
    deadline: '',
    dateApplied: '',
    importantDate: '',
    notes: '',
    finalResult: '',
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('http://localhost:4000/jobs/create', form, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${user.token}` 
        },
      });
      
      console.log('Job submitted successfully:', response.data);
    } catch (error) {
      console.error('Error submitting job: ', error);
    }
  };

  console.log(user.token, user.userId); 


  return(
    <form onSubmit={handleSubmit}>
      
      <label>Company:</label>
      <input name="company" type="text" onChange={handleChange} required />

      <label>Position:</label>
      <input name="position" type="text" onChange={handleChange} required />

      <label>Application Status:</label>
      <select name="appStatus" onChange={handleChange} required>
        <option value="Sent">Sent</option>
        <option value="Waiting">Waiting</option>
        <option value="Next Round">Next Round</option>
      </select>

      <label>Next Steps:</label>
      <input name="nextSteps" type="text" onChange={handleChange} />

      <label>Deadline:</label>
      <input name="deadline" type="date" onChange={handleChange} />

      <label>Date Applied:</label>
      <input name="dateApplied" type="date" onChange={handleChange} required />

      <label>Important Date:</label>
      <input name="importantDate" type="date" onChange={handleChange} />

      <label>Notes:</label>
      <textarea name="notes" onChange={handleChange} />

      <label>Final Result:</label>
      <select name="finalResult" onChange={handleChange}>
        <option value="">--Select--</option>
        <option value="Accepted">Accepted</option>
        <option value="Rejected">Rejected</option>
      </select>

      <button type="submit">Submit</button>
    </form>
  
  );
};
export default JobForm;