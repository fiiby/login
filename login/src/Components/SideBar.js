import React from 'react';
import {Link} from 'react-router-dom';

const SideBar = ()=> {
  return (
    <div className="side-bar">
        <br></br>
      <div>
            <Link to="/dashboard/users" className="item-link">Users </Link>

      </div>
        
        
        </div>
  )
}
export default SideBar;