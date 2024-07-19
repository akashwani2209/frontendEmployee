import React, { useEffect, useState } from 'react';
import './EmployeeTable.css';

function EmployeeTable() {
  const [employeeData, setEmployeeData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:8080/api/employees')
      .then(response => response.json())
      .then(data => {
        setEmployeeData(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching employee data:', error);
        setLoading(false);
      });
  }, []);

  const deleteEmployee = (lanID) => {
    fetch(`http://localhost:8080/api/employees/${lanID}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (response.ok) {
          setEmployeeData(employeeData.filter(employee => employee.lanID !== lanID));
        } else {
          console.error('Error deleting employee:', response.statusText);
        }
      })
      .catch(error => console.error('Error deleting employee:', error));
  };

  if (loading) {
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
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {employeeData.map(employee => (
            <tr key={employee.lanID}>
              <td>{employee.name}</td>
              <td>{employee.designation}</td>
              <td>{employee.lanID}</td>
              <td>{employee.taskAssigned}</td>
              <td>
                <button onClick={() => deleteEmployee(employee.lanID)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeTable;
