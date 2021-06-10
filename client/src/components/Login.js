import React from 'react';
import '../style/Login.css';

const Login=()=>{
  return(
    <div>
      <div class="mainsigninCard">
        <div class="inputMainCard">
            <div class="signinHeading">
                <div class="signinText">
                    LOGIN
                </div>
            </div>
            <div class="inputCard">
                <form className="form">

                    <div class="input-group inputName">
                        <span class="input-group-text" id="addon-wrapping">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-envelope-fill" viewBox="0 0 16 16">
                                <path
                                    d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z" />
                            </svg>
                        </span>
                        <input type="email" class="form-control" placeholder="Email*" aria-label="Email"
                            aria-describedby="basic-addon1"/>
                    </div>
                    <div class="input-group inputName">
                        <span class="input-group-text" id="addon-wrapping">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-lock-fill" viewBox="0 0 16 16">
                                <path
                                    d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
                            </svg>
                        </span>
                        <input type="password" class="form-control" placeholder="Password*" aria-label="Password"
                            aria-describedby="basic-addon1"/>
                    </div>
                    <div class="container">
                        <div class="signinBtn">
                            <button type="submit" class="btn signinbutton">SUBMIT</button>
                        </div>
                    </div>
                </form>
            </div>
            <div class="signup">
                <p class="dontHave">Don't have an account. <a href="/register" class="signUpLink">Register</a></p> 
            </div>
        </div>
    </div>
    </div>
  )
}

export default Login;