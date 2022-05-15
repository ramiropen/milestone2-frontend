import React from "react";
import MainContainer from "../MainContainer";
import TeamPanel from "../components/overview_panels/TeamPanel";
import EmployeePanel from "../components/overview_panels/EmployeePanel";

export default function Dashboard({ teams, employees }) {
  return (
    <MainContainer sidebar='Overview'>
      <h1 className='page-header'>Overview</h1>
      <div className='row'>
        <div className='col-md-4'>
          <TeamPanel teams={teams} employees={employees} />
        </div>
        <div className='col-md-4'>
          <EmployeePanel employees={employees} />
        </div>
      </div>
    </MainContainer>
  );
}
