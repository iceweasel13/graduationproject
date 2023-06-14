import React from "react";
import { Link } from "react-router-dom";

const BuilderCard = ({ logo, title, url }) => {
  return (
    <Link to={`/projects/${url}`}>
      <div className="flex flex-col h-72 w-full max-w-xs mx-2 my-2 items-center p-4 text-center bg-gray-900 rounded-lg shadow-md">
        <img src={logo} alt={title} className="w-48 h-48 mb-4 rounded-full" />
        <h3 className="font-bold text-xl text-white">{title}</h3>
      </div>
    </Link>
  );
};

export default BuilderCard;
