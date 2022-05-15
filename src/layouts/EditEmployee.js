import React, { useState } from "react";
import MainContainer from "../MainContainer";
import { Link } from "react-router-dom";

export default function EditEmployee() {
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
        method: "PUT",
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
  };

  // jsx
  return (
    <MainContainer sidebar='Employees'>
      <h1 className='page-header'>Edit Employee</h1>

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
            <input type='submit' value='Edit Employee' style={{ width: "240px" }} />
            <Link to='/employees'>Return to Employees Page</Link>
          </form>
        </div>
      </div>
    </MainContainer>
  );
}

// import React from "react";
// import MainContainer from "../MainContainer";

// export default function EditEmployee() {
//   const editEmployee = async () => {
//     let todo = {
//       userId: 123,
//       title: "loren impsum doloris",
//       completed: false,
//     };

//     fetch("http://localhost:3000/test", {
//       method: "PUT",
//       body: JSON.stringify(todo),
//       headers: { "Content-Type": "application/json" },
//     })
//       .then((res) => res.json())
//       .then((json) => console.log(json));
//     // .catch((err) => console.log(err));
//   };

//   return (
//     <MainContainer sidebar='Employees'>
//       <h1 className='page-header'>Edit Employee</h1>

//       <div className='row'>
//         <div className='col-md-12'>
//           <table className='table table-striped table-bordered'>
//             <thead>
//               <tr>
//                 <th>Name</th>
//                 <th>Position</th>
//                 <th>Team</th>
//                 <th>Salary</th>
//               </tr>
//             </thead>
//             <tr>
//               <td>
//                 <input type='text'></input>
//               </td>
//               <td>
//                 <input type='text'></input>
//               </td>
//               <td>
//                 <input type='text'></input>
//               </td>
//               <td>
//                 <input type='text'></input>
//               </td>
//             </tr>
//           </table>
{
  /* <Link to='/employees'>
  <button onClick={editEmployee}>Edit Employee</button>
</Link>; */
}
//         </div>
//       </div>
//     </MainContainer>
//   );
// }
