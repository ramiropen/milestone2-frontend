import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Add() {
  // useState
  const [name, setName] = useState("John");
  const [position, setPosition] = useState("CEO");
  const [team, setTeam] = useState("");
  const [salary, setSalary] = useState("");

  // functions
  let handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/employee", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
        position: position,
        team: team,
        salary: salary,
      }),
    });
  };

  // jsx
  return (
    <div>
      <h1>Add New Employee</h1>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", width: "250px" }}
      >
        <input
          type='text'
          name='name'
          placeholder='name'
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type='text'
          name='position'
          placeholder='position'
          onChange={(e) => setPosition(e.target.value)}
        />
        <input
          type='text'
          name='team'
          placeholder='team'
          onChange={(e) => setTeam(e.target.value)}
        />
        <input
          type='text'
          name='salary'
          placeholder='salary'
          onChange={(e) => setSalary(e.target.value)}
        />
        <input type='submit' value='Add Employee' />
      </form>
      <Link to='/'>Return to Employees Page</Link>
    </div>
  );
}
