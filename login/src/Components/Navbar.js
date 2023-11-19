import React from 'react';
import {Link} from 'react-router-dom'

const Navbar = () => {
    return(
        <nav >     
            <div className ="navbar">
                <ul className="text">
              <li className="list_txt"> <Link to="/">Home</Link></li>
               <li className="list_txt"><Link to="/login">login</Link></li>
               <li className="list_txt "><Link to="/register">register</Link></li>
               <li className="list_txt"><Link to="/AddStudent">Add Student</Link></li>
             </ul>
            </div>
        </nav>
    );
}
export default Navbar;

