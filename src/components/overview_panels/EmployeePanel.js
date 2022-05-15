import React from "react";
import { Link } from "react-router-dom";

export default function EmployeePanel({ employees }) {
  // helper functions
  let key = 0;
  const listEmployees = employees.map((employee) => (
    <tr key={key++}>
      <td>{employee.Name}</td>
      <td>{employee.Position}</td>
    </tr>
  ));

  // jsx
  return (
    <div className='panel panel-default'>
      <div className='panel-heading'>
        <h3 className='panel-title'>Employees</h3>
      </div>
      <div className='panel-body'>
        <div className='table-responsive overview-table'>
          <table className='table table-striped table-bordered'>
            <tbody>{listEmployees}</tbody>
          </table>
        </div>
        <Link to='/employees' className='btn btn-primary form-control'>
          View All Employee Data
        </Link>
      </div>
    </div>
  );
}
