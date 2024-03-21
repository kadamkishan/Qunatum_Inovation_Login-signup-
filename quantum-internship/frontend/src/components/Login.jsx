import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from 'react-hot-toast';


const Login = ({updateUser}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate=useNavigate();

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  function handleChangePass(e) {
    setPassword(e.target.value);
  }

  function sendData(event) {
    event.preventDefault();
    console.log(email + password);


    axios
      .post("http://localhost:3001/login", {email,password})
      .then((result) => {
        console.log(result);
        if(result.data === "Success"){
          toast.success("Logged in Sucessfully");
          updateUser(true);
          navigate('/home')
        }
        else{
          toast.error("Oops! Wrong email or password");
        }
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="">
      <section className="vh-100 gradient-custom">
        <div className="container py-5 h-75">
          <div className="row d-flex justify-content-center align-items-center h-75">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div
                className="card text-white"
                style={{ borderRadius: "1rem", backgroundColor: "#185870" }}
              >
                <div className="card-body p-5 text-center">
                  <div
                    className="fw-bold text-dark p-4 text-uppercase"
                    style={{
                      backgroundColor: "#7EE2B4",
                      position: "relative",
                      top: "-60px",
                      left:"22%",
                      width:"60%",
                      fontSize:"20px"
                      
                    }}
                  >
                    SIGN IN
                  </div>

                  <div className="pb-5" style={{marginTop:"-20px"}}>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100"
                        height="100"
                        fill="currentColor"
                        className="bi bi-person-circle mb-3 "
                        viewBox="0 0 16 16"
                      >
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                        <path
                          fillRule="evenodd"
                          d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                        />
                      </svg>
                    </span>

                    <form onSubmit={sendData}>
                      {" "}
                      {/* Add form element */}
                      <div className="form-outline form-white mb-4">
                        <input
                          type="email"
                          id="typeEmailX"
                          className="form-control form-control-lg text-white-50"
                          onChange={handleChangeEmail}
                          style={{ backgroundColor: "#59B5D7" }}
                          placeholder="username"
                        />
                      </div>
                      <div className="form-outline form-white mb-4">
                        <input
                          type="password"
                          id="typePasswordX"
                          className="form-control form-control-lg text-white "
                          onChange={handleChangePass}
                          style={{ backgroundColor: "#59B5D7" }}
                          placeholder="password"
                        />
                      </div>
                      <div className="d-flex justify-content-between mb-3">
                        <div>
                          <Link to={"/signup"}>
                            <span  className="text-white fw-bold text-decoration-none">
                               SIGN UP
                            </span>
                          </Link>
                        </div>

                        <div>
                          <p className="small ">
                            <a className="text-white-50" href="#!">
                              Forgot password?
                            </a>
                          </p>
                        </div>
                      </div>
                      <div>
                        <button
                          className="btn bg-white btn-lg w-100 fw-bold"
                          type="submit" style={{color:"gray"}}
                        >
                          LOGIN
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
