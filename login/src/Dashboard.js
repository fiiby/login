import React from 'react';
import TopBar from './Components/TopBar';
import SideBar from './Components/SideBar';

const Dashboard = () => {
  return (

    <div>
        <TopBar/>
        <div className="d-flex">
        <SideBar/>
        {/* <h1>test</h1> */}

        </div>
        
        <div>Dashboard</div>
    </div>
  );
}

export default Dashboard;