import React, { useState } from "react";
import MainContainer from "../MainContainer";
import { Link } from "react-router-dom";

export default function Employees({ employees }) {
  // functions
  const deleteEmployee = async (name) => {
    await fetch("http://localhost:3000/employee/" + name, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    window.location.reload(true);
  };

  let key = 0;
  const table = employees.map((employee) => (
    <tr key={key++}>
      <td>{employee.Name}</td>
      <td>{employee.Position}</td>
      <td>{employee.Team}</td>
      <td>${employee.Salary}</td>
      <td>
        <Link to='/editemployee'>EDIT</Link>
        <button onClick={() => deleteEmployee(employee.Name)}>DELETE</button>
      </td>
    </tr>
  ));

  return (
    <MainContainer sidebar='Employees'>
      <h1 className='page-header'>Employees</h1>

      <div className='row'>
        <div className='col-md-12'>
          <table className='table table-striped table-bordered'>
            <thead>
              <tr>
                <th>Name</th>
                <th>Position</th>
                <th>Team</th>
                <th>Salary</th>
              </tr>
            </thead>
            <tbody>{table}</tbody>
          </table>
          <Link to='/newemployee'>Add New Employee</Link>
        </div>
      </div>
    </MainContainer>
  );
}
