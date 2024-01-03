import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Protected = () => {
  const navigate = useNavigate();
  // const {Component} = props;
  useEffect(() => {
    if (localStorage.getItem("token")) {
      localStorage.setItem("loginStatus", "please login to view dashbord");
      navigate("/login");
    }
  }, []);
  return
};

export default Protected;
