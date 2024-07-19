import React, { useState } from 'react';
import './EmployeeForm.css'; // Import your CSS file

function EmployeeForm() {
  const [name, setName] = useState('');
  const [designation, setDesignation] = useState('');
  const [lanID, setLanID] = useState('');
  const [taskAssigned, setTaskAssigned] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const employee = { name, designation, lanID, taskAssigned };

    fetch('http://localhost:8080/api/employees', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(employee),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Employee created:', data);
        // Reset form fields
        setName('');
        setDesignation('');
        setLanID('');
        setTaskAssigned('');
      })
      .catch(error => console.error('Error creating employee:', error));
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
