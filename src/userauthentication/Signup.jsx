import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Signup = () => {
  let navigate = useNavigate();
  let [userdata, setuserdata] = useState({});

  let handleChange = e => {
    setuserdata({ ...userdata, [e.target.name]: e.target.value });
  };

  let handleSubmit = e => {
    e.preventDefault();
    let payload = userdata;
    axios.post("http://localhost:4000/users", payload);
    toast.success("User registered successfully !");
    navigate("/login");
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <h2>Signup Page</h2>
        <div className="items">
          <label htmlFor="fname">First Name : </label>
          <input type="text" id="fname" name="fname" onChange={handleChange} />
        </div>
        <div className="items">
          <label htmlFor="lname">Last Name : </label>
          <input type="text" id="lname" name="lname" onChange={handleChange} />
        </div>
        <div className="items">
          <label htmlFor="uname">UserName : </label>
          <input type="text" id="uname" name="uname" onChange={handleChange} />
        </div>
        <div className="items">
          <label htmlFor="pwd">Password : </label>
          <input type="text" id="pwd" name="pwd" onChange={handleChange} />
        </div>
        <div className="items">
          <label htmlFor="email">Email : </label>
          <input type="text" id="email" name="email" onChange={handleChange} />
        </div>
        <div className="items">
          <button>Create account</button>
          <button>cancel</button>
        </div>
        <Link to={"/login"}>Already have an account ?</Link>
      </form>
    </div>
  );
};

export default Signup;
