import React, { useState } from "react";
import MainContainer from "../MainContainer";

export default function NewEmployee() {
  // useState
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [team, setTeam] = useState("");
  const [salary, setSalary] = useState("");

  // functions
  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("http://localhost:3000/employee", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name,
          position: position,
          team: team,
          salary: salary,
        }),
      });
      let resJson = await res.json();
      console.log(resJson);
    } catch (err) {
      console.log(err);
    }
    window.location.reload(true);
  };

  // jsx
  return (
    <div style={{ marginTop: "50px" }}>
      <h1 className='page-header'>Add New Employee</h1>

      <div className='row'>
        <div className='col-md-12'>
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column" }}>
            <div>
              <label style={{ width: "75px" }}>Name</label>
              <input
                type='text'
                name='name'
                placeholder='name'
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label style={{ width: "75px" }}>Position</label>
              <input
                type='text'
                name='position'
                placeholder='position'
                onChange={(e) => setPosition(e.target.value)}
              />
            </div>
            <div>
              <label style={{ width: "75px" }}>Team</label>
              <input
                type='text'
                name='team'
                placeholder='team'
                onChange={(e) => setTeam(e.target.value)}
              />
            </div>
            <div>
              <label style={{ width: "75px" }}>Salary</label>
              <input
                type='text'
                name='salary'
                placeholder='salary'
                onChange={(e) => setSalary(e.target.value)}
              />
            </div>
            <input type='submit' value='Add Employee' style={{ width: "240px" }} />
          </form>
        </div>
      </div>
    </div>
  );
}
