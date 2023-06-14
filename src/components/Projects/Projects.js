import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import BuilderCard from "./BuilderCard";

const Projects = ({}) => {
  const [builders, setBuilders] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/projects")
      .then((response) => {
        setBuilders(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);
  const filteredBuilders = builders.filter(
    (builder) => builder.applicationStatus === true
  );
  return (
    <div className="min-h-screen container mx-auto p-4 bg-gray-950 rounded-lg mt-4 mb-4 px-36 ">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search"
            className="px-4 py-2 bg-gray-200 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="px-4 py-2 bg-blue-600 text-white rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
        <h2 className="text-xl font-bold mr-12">Projects</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredBuilders.map((builder) => (
          <Link to={`/project/${builder.url}`} key={builder.id}>
            <BuilderCard
              logo={builder.logo}
              title={builder.title}
              url={builder.url}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Projects;
