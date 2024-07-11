import React, { useEffect, useState } from 'react';

function EmployeeTable() {
  const [employeeData, setEmployeeData] = useState(null);

  useEffect(() => {
    // For demonstration, retrieve data from localStorage or state management
    const storedEmployeeData = JSON.parse(localStorage.getItem('employeeData'));
    setEmployeeData(storedEmployeeData);
  }, []);

  if (!employeeData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Employee Table</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Designation</th>
            <th>LanID</th>
            <th>Task Assigned</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{employeeData.name}</td>
            <td>{employeeData.designation}</td>
            <td>{employeeData.lanID}</td>
            <td>{employeeData.taskAssigned}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeTable;
