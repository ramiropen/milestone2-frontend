import React from "react";
import { Link } from "react-router-dom";

export default function TeamPanel({ teams, employees }) {
  let key = 0;
  const listTeams = teams.map((team) => (
    <tr key={key++}>
      <td>{team.TeamName}</td>
      <td>{employees.filter((employee) => employee.Team === team.TeamName).length} Employees</td>
    </tr>
  ));

  return (
    <div className='panel panel-default'>
      <div className='panel-heading'>
        <h3 className='panel-title'>Teams</h3>
      </div>
      <div className='panel-body'>
        <div className='table-responsive overview-table'>
          <table className='table table-striped table-bordered'>
            <tbody>{listTeams}</tbody>
          </table>
        </div>
        <Link to='/teams' className='btn btn-primary form-control'>
          View All Team Data
        </Link>
      </div>
    </div>
  );
}
