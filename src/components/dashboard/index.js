import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

const Dashboard = () => {

  const loginId = useSelector(state => state.authentication.loginId);
  const users = useSelector(state => state.registration.users);
  
  if (loginId === undefined) return <Redirect to='/signin' />

  let DashboardRender =
    <div className="container">
      <div><br></br>
        <table className="table t1 table-striped table-dark " >
          <thead >
            <tr>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Email </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{users[loginId].firstName}</td>
              <td>{users[loginId].lastName}</td>
              <td>{users[loginId].email}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>;
  return DashboardRender;
};

export default Dashboard;