import React from 'react';
import {Link} from 'react-router-dom'

const Navbar = () => {
    return(
        <nav >     
            <div className ="navbar">
                <ul className="text">
              <li className="list_txt"> <Link to="/" className="dot">Home</Link></li>
               <li className="list_txt"><Link to="/login" className="dot">Login</Link></li>
               <li className="list_txt "><Link to="/register" className="dot">Register</Link></li>
               <li className="list_txt"><Link to="/AddStudent" className="dot">Add Student</Link></li>
                <li className="list_txt"><Link to="/Students" className="dot"> Students</Link></li>
             </ul>
            </div>
        </nav>
    );
}
export default Navbar;

