import React, { useEffect } from "react";
import auth from "../services/authServices";

const LogOut = () => {
  useEffect(() => {
    auth.logOut();
    window.location = "/";
  });
  return <></>;
};

export default LogOut;
