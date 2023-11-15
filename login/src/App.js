
import './index.css';

import login from'./login'

function App() {
  return (
      <div className = "container">
        <div className = "header">
            <div className = "text">
              <h2>Sign Up</h2>
              </div>
            <div className = "underline"></div>
           </div>
          <div className = "inputs"></div>
       
              <div className = "input">
                <div>
                 <img src=""  alt=""/>
                         <label>User Name: </label>
                         <input type = "text"/>
                </div>
                    <div>
                           <img src=""  alt=""/>
                         <label>E-mail: </label>
                         <input type = "text"/>
                    </div>
                    <div>
                           <img src=""  alt=""/>
                         <label>Password: </label>
                         <input type = "text"/>
                    </div>
                     

              </div>
               <div className = "forgot-password">Lost Password 
            <span>Click Here!</span>
          </div>

            <div className = "submit-container">
              <div className = "submit">Sign Up</div>
              <div className = "submit">Login</div>
            </div>
    </div>

    // <Route path="/About">
    //     <About/>
  );
}

export default App;
