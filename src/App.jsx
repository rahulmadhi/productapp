import React from "react";
import Nav from "./Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Viewproducts from "./Viewproducts";
import Addproducts from "./Addproducts";
import Signup from "./userauthentication/Signup";
import Login from "./userauthentication/Login";
import { ToastContainer, toast } from "react-toastify";

const App = () => {
  return (
    <div>
      <Router>
        <ToastContainer />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/viewproducts" element={<Viewproducts />} />
          <Route path="/addproducts" element={<Addproducts />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
