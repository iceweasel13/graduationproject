import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

function CertificatePage() {
  const { ca } = useParams();
  const [certificates, setCertificates] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/certificates")
      .then((response) => {
        setCertificates(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  const certificate = certificates.find((c) => c.contractAddress === ca);

  if (!certificate) {
    return <div>Sertifika bulunamadı</div>;
  }

  return (
    <div className="flex h-screen bg-slate-900">
      <div className="w-2/6 flex flex-col bg-black items-center justify-center">
        <img
          src={certificate.logo}
          alt="Certificate"
          className="w-3/4 h-auto"
        />
        <button className=" bg-blue-400 text-white py-4 mt-12 px-4 w-48 rounded-full">
          Claim
        </button>
      </div>
      <div className="w-1/2 flex flex-col p-8">
        <div>
          <h1 className="text-4xl font-bold mb-4">{certificate.title}</h1>
          <p className="text-slate-500 mb-4">{certificate.description}</p>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-2">Project</h2>
          <Link
            to={`/projects/${certificate.projectId}`}
            className="text-blue-400 cursor-pointer"
          >
            {certificate.projectName}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CertificatePage;
