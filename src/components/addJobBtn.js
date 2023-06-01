import React, { useState } from 'react';
import JobForm from './JobForm';

const AddJobBtn = () => {
  const [isAddingJob, setIsAddingJob] = useState(false);

  const handleAddJobClick = () => {
    setIsAddingJob(!isAddingJob);
  };

  return (
    <div>
      <button onClick={handleAddJobClick}>
        {isAddingJob ? 'Cancel' : 'Add Job'}
      </button>
      {isAddingJob && <JobForm />}
    </div>
  );
};

export default AddJobBtn;