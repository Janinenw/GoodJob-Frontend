import React, { useEffect, useState, useContext } from 'react';
import { UserContext } from '../App';

function Jobs() {
  const [jobs, setJobs] = useState([]);
  const { user } = useContext(UserContext);

  useEffect(() => {
    const fetchJobs = async () => {
      const response = await fetch('http://localhost:4000/jobs', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${user.token}` 
        }
      });
      const data = await response.json();
      setJobs(data);
    };

    if (user) {
      fetchJobs();
    }
  }, [user]);

  return (
    <div>
      {user && <h2>Welcome, {user.name}!</h2>}
      <h1>You've hit the jobs page</h1>
      {jobs.map((job) => (
        <div key={job._id}>
          
        </div>
      ))}
    </div>
  );
}

export default Jobs;