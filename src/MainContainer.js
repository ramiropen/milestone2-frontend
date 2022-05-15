import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

export default function MainContainer(props) {
  return (
    <div>
      <Navbar />
      <div className='container-fluid'>
        <div className='row'>
          <Sidebar highlight={props.sidebar} />
          <div className=' col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main'>
            {props.children}
          </div>
        </div>
      </div>
    </div>
  );
}
