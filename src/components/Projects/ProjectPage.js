import CertificateCard from "./CertificateCard";
import { FaTwitter, FaInstagram, FaGlobe, FaLinkedin } from "react-icons/fa";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";

function ProjectPage() {
  const { builderUrl } = useParams();
  const [builders, setBuilders] = useState([]);
  const [certificates, setCertificates] = useState([]);

  useEffect(() => {
    // Builders API
    axios
      .get("http://localhost:5000/api/projects")
      .then((response) => {
        setBuilders(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });

    // Certificates API
    axios
      .get("http://localhost:5000/api/certificates")
      .then((response) => {
        setCertificates(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  const project = builders.find((b) => b.url === builderUrl);
  const filteredCertificates = certificates.filter(
    (certificate) => project && certificate.projectId === project._id
  );

  if (!project) {
    return (
      <div className="min-h-screen text-center py-48 text-5xl font-extrabold">
        Proje bulunamadı
      </div>
    );
  }

  return (
    <div className=" bg-slate-900 py-20">
      <div
        className="flex flex-wrap items-start justify-between mx-16 p-4 bg-slate-900 rounded-tl-xl

rounded-tr-xl border-2 border-slate-700"
      >
        <div className="w-full sm:w-1/12">
          <img
            className=" rounded-full my-8 mx-8"
            src={project.logo}
            alt="Logo"
          />
        </div>
        <div className="w-full sm:w-1/2 sm:pl-4">
          <h1 className="text-4xl font-bold mb-4 pl-4">{project.title}</h1>
          <p className="text-slate-500 mb-4 justify-around ">
            {project.introduction}
          </p>
        </div>
        <div className="w-full sm:w-1/4 flex sm:justify-end space-x-4 my-6 mx-6 sm:mt-0">
          <a href={project.website} target="_blank" rel="noopener noreferrer">
            <FaGlobe className="text-xl" />
          </a>
          <a href={project.twitter} target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-xl" />
          </a>
          <a href={project.instagram} target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-xl" />
          </a>
          <a href={project.linkedin} target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-xl" />
          </a>
        </div>
      </div>
      <div
        className=" mx-16 p-4 bg-slate-900 rounded-br-xl

rounded-bl-xl border-2 border-slate-700 border-t-0 pb-8  px-36 "
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search"
              className="px-4 py-2 bg-gray-200 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="px-3 py-2 bg-blue-400 text-white rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
          <h2 className="text-xl font-bold ">Certificates</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-24 mx-32">
          {filteredCertificates.map((certificate) => (
            <CertificateCard
              key={certificate.id}
              certificate={certificate}
              builderUrl={builderUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectPage;
