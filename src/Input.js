import React from "react";

function Input({ label, isAuth = false }) {
  if (!isAuth) {
    return <div className="text-white ">kayit ol</div>;
  }

  return <div className="text-white ">{label}</div>;
}

export default Input;
