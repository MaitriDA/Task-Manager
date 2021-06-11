import React from 'react';
import '../style/Register.css';
import NavBar from '../components/NavBar';

const Register = () => {
  return (
    <div>
      <NavBar/>
      <div class="mainsignupCard">
        <div class="inputMainCard">
          <div class="signupHeading">
            <div class="signupText">
              REGISTER
            </div>
          </div>
          <div class="inputCard">
            <form action="/registers" method="POST">
              <div class="leftRight">
                <div class="leftInput">
                  <div class="input-group inputName">
                    <span class="input-group-text" id="addon-wrapping">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-person-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                      </svg>
                    </span>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Name*"
                      name="Name"
                      aria-label="Name"
                      aria-describedby="basic-addon1"
                    />
                  </div>

                  <div class="input-group inputName">
                    <span class="input-group-text" id="addon-wrapping">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-envelope-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z" />
                      </svg>
                    </span>
                    <input
                      type="email"
                      class="form-control"
                      placeholder="Email*"
                      name="Email"
                      aria-label="Email"
                      aria-describedby="basic-addon1"
                    />
                  </div>

                  <div class="input-group inputName">
                    <span class="input-group-text" id="addon-wrapping">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-telephone-fill"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                        />
                      </svg>
                    </span>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Contact"
                      name="Contact"
                      aria-label="Conatct"
                      aria-describedby="basic-addon1"
                    />
                  </div>

                  <div class="input-group inputName">
                    <span class="input-group-text" id="addon-wrapping">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-lock-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
                      </svg>
                    </span>
                    <input
                      type="password"
                      class="form-control"
                      placeholder="Password*"
                      name="password"
                      aria-label="Password"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                  <div class="input-group inputName">
                    <span class="input-group-text" id="addon-wrapping">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-lock-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
                      </svg>
                    </span>
                    <input
                      type="password"
                      class="form-control"
                      placeholder="Confirm Password*"
                      name="ConfirmPassword"
                      aria-label="Comfirm Password"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                </div>
                
              </div>
              <div class="container">
                <div class="signupBtn">
                  <button type="submit" class="btn signupbutton">SUBMIT</button>
                </div>
              </div>
            </form>
          </div>
          <div class="signup">
            <p class="dontHave">
              Already have an account.
              {' '}
              <a href="/login" class="signUpLink">Login</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
