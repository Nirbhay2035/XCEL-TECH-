
import React  from 'react';

export default function Loginpage(){
 
  return (
    <>   
      <div className="container login-container ">
        <input type="checkbox" id="check" />
        
        <div className="login form">
          <header>Login</header>
          <form action="#">
            <input type="email" placeholder="Enter your email" />
            <input type="password" placeholder="Enter your password" />
            <a href="#">Forgot password?</a>
            <input type="button" className="button" value="Login" />
          </form>
          <div className="signup">
            <span>Don't have an account? 
              <label htmlFor="check">Signup</label>
            </span>
          </div>
        </div>
        
        <div className="registration form">
          <header>Signup</header>
          <form action="#">
            <input type="text" placeholder="Enter your email" />
            <input type="password" placeholder="Create a password" />
            <input type="password" placeholder="Confirm your password" />
            <input type="button" className="button" value="Signup" />
          </form>
          <div className="signup">
            <span>Already have an account? 
              <label htmlFor="check">Login</label>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
