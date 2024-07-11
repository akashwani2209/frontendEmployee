import React, { useState } from 'react';
import './EmployeeForm.css'; // Import your CSS file

function EmployeeForm() {
  const [name, setName] = useState('');
  const [designation, setDesignation] = useState('');
  const [lanID, setLanID] = useState('');
  const [taskAssigned, setTaskAssigned] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // For demonstration, log form values
    console.log('Name:', name);
    console.log('Designation:', designation);
    console.log('LanID:', lanID);
    console.log('Task Assigned:', taskAssigned);
    // Reset form fields
    setName('');
    setDesignation('');
    setLanID('');
    setTaskAssigned('');
  };

  return (
    <div className="form-container">
      <h2>Employee Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <label>
          Designation:
          <input type="text" value={designation} onChange={(e) => setDesignation(e.target.value)} required />
        </label>
        <label>
          LanID:
          <input type="text" value={lanID} onChange={(e) => setLanID(e.target.value)} required />
        </label>
        <label>
          Task Assigned:
          <textarea value={taskAssigned} onChange={(e) => setTaskAssigned(e.target.value)} required />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default EmployeeForm;
