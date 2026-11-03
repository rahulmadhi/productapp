import axios from "axios";
import React, { useState } from "react";
import { data, Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  let navigate = useNavigate();
  let [userdata, setuserdata] = useState({});

  let handleChange = e => {
    setuserdata({ ...userdata, [e.target.name]: e.target.value });
  };

  let handleSubmit = e => {
    e.preventDefault();
    axios.get("http://localhost:4000/users").then(x => {
      let data = x.data;
      console.log(data);

      let info = data.find(x => {
        console.log(userdata.pwd);
        return x.uname == userdata.uname && x.pwd == userdata.pwd;
      });
      if (info) {
        toast.success("user logged in success");
        navigate("/");
      } else {
        toast.error("Invalid username and pass");
        navigate("/login");
      }
    });
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <h2>Login Page</h2>

        <div className="items">
          <label htmlFor="uname">UserName : </label>
          <input type="text" id="uname" name="uname" onChange={handleChange} />
        </div>
        <div className="items">
          <label htmlFor="pwd">Password : </label>
          <input type="text" id="pwd" name="pwd" onChange={handleChange} />
        </div>

        <div className="items">
          <button>Login </button>
          <button>Cancel</button>
        </div>
        <Link to={"/signup"}>Dont have an account? </Link>
      </form>
    </div>
  );
};

export default Login;
