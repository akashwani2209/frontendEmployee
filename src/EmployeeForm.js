import React, { useState } from 'react';

function EmployeeForm() {
  const [name, setName] = useState('');
  const [designation, setDesignation] = useState('');
  const [lanID, setLanID] = useState('');
  const [taskAssigned, setTaskAssigned] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // For demonstration, you can store data in localStorage or manage state differently
    console.log('Name:', name);
    console.log('Designation:', designation);
    console.log('LanID:', lanID);
    console.log('Task Assigned:', taskAssigned);
  };

  return (
    <div>
      <h1>Employee Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <br />
        <label>
          Designation:
          <input type="text" value={designation} onChange={(e) => setDesignation(e.target.value)} required />
        </label>
        <br />
        <label>
          LanID:
          <input type="text" value={lanID} onChange={(e) => setLanID(e.target.value)} required />
        </label>
        <br />
        <label>
          Task Assigned:
          <textarea value={taskAssigned} onChange={(e) => setTaskAssigned(e.target.value)} required />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default EmployeeForm;
