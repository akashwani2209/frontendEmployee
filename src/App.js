import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import EmployeeForm from './EmployeeForm';
import EmployeeTable from './EmployeeTable';
import './App.css'; // Import your CSS file

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Switch>
          <Route exact path="/">
            <EmployeeForm />
          </Route>
          <Route path="/table">
            <EmployeeTable />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
