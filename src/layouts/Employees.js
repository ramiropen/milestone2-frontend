import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Employees({}) {
  // useState
  const [employees, setEmployees] = useState([]);

  // useEffect
  useEffect(() => getEmployees(), []);

  // functions
  const getEmployees = () => {
    fetch("http://localhost:3000/employee")
      .then((response) => response.json())
      .then((data) => {
        setEmployees(data);
      });
  };

  const deleteEmployee = async (id) => {
    await fetch(`http://localhost:3000/employee/${id}`, {
      method: "DELETE",
    });
  };

  const table = employees.map((employee, index) => (
    <tr key={index} class='row'>
      <td class='column'>{employee.name}</td>
      <td class='column'> {employee.position}</td>
      <td class='column'>{employee.team}</td>
      <td class='column'>${employee.salary}</td>
      <td>
        <button>
          <Link to={`/edit/${employee._id}`}>EDIT</Link>
        </button>

        <button
          onClick={() => {
            deleteEmployee(employee._id);
            window.location.reload(true);
          }}
        >
          DELETE
        </button>
      </td>
    </tr>
  ));

  // jsx
  return (
    <div class='employees'>
      <h1>Employees</h1>
      <table>
        <thead>
          <tr>
            <th class='column'></th>
            <th class='column'>Name</th>
            <th class='column'>Position</th>
            <th class='column'>Team</th>
            <th class='column'>Salary</th>
          </tr>
        </thead>
        <tbody>{table}</tbody>
      </table>
      <Link to='/add'>Add New Employee</Link>
    </div>
  );
}
