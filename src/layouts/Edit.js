import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Edit() {
  let id = useLocation().pathname.substring(6); // employee's mongoDB id

  // useState
  const [employee, setEmployee] = useState({
    name: "",
    position: "",
    team: "",
    salary: "",
  });

  // functions
  let handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:7777/employee/" + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: employee.name,
        position: employee.position,
        team: employee.team,
        salary: employee.salary,
      }),
    });
  };

  // jsx
  return (
    <div>
      <h1>Edit Employee</h1>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", width: "250px" }}
      >
        <input
          type='text'
          placeholder='name'
          name='name'
          onChange={(e) => setEmployee({ ...employee, name: e.target.value })}
        />
        <input
          type='text'
          placeholder='position'
          name='position'
          onChange={(e) => setEmployee({ ...employee, position: e.target.value })}
        />
        <input
          type='text'
          placeholder='team'
          name='team'
          onChange={(e) => setEmployee({ ...employee, team: e.target.value })}
        />
        <input
          type='text'
          placeholder='salary'
          name='salary'
          onChange={(e) => setEmployee({ ...employee, salary: e.target.value })}
        />
        <input type='submit' value='Edit Employee' />
      </form>
      <Link to='/'>Return to Employees Page</Link>
    </div>
  );
}
