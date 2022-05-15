import React from "react";
import MainContainer from "../MainContainer";

export default function Teams({ teams, employees }) {
  const table = teams.map((team, index) => (
    <tr key={index}>
      <td>{team.TeamName}</td>
      <td>{employees.filter((employee) => employee.Team === team.TeamName).length}</td>
    </tr>
  ));

  return (
    <MainContainer sidebar='Teams'>
      <h1 className='page-header'>Teams</h1>
      <div className='row'>
        <div className='col-md-12'>
          <table className='table table-striped table-bordered'>
            <thead>
              <tr>
                <th>Name</th>
                <th>Employees</th>
              </tr>
            </thead>
            <tbody>{table}</tbody>
          </table>
        </div>
      </div>
    </MainContainer>
  );
}
