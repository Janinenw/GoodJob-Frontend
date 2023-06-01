import React, { useContext } from 'react';
import { UserContext } from '../App';
import AddJobBtn from '../components/addJobBtn'; 
function Jobs() {
  const { user } = useContext(UserContext);

  return (
    <div>
      {user && <h2>Welcome, {user.name}!</h2>}
      <h1>You've hit the jobs page</h1>
      <AddJobBtn /> 
    </div>
  );
}

export default Jobs;