import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EmployeeForm from './EmployeeForm';
import EmployeeTable from './EmployeeTable';
import Navbar from './Navbar'; // Make sure to import Navbar

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<EmployeeForm />} />
          <Route path="/table" element={<EmployeeTable />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
