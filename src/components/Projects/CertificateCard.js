import React from "react";
import { Link } from "react-router-dom";

function CertificateCard({ certificate, builderUrl }) {
  return (
    <Link
      to={`/projects/${builderUrl}/certificates/${certificate.contractAddress}`}
    >
      <div className="p-4 bg-slate-900 rounded-xl border-2 border-slate-700">
        <img
          className="w-full h-72 object-cover mb-4"
          src={certificate.logo}
          alt="Certificate logo"
        />
        <h3 className="text-xl font-bold">{certificate.title}</h3>
      </div>
    </Link>
  );
}

export default CertificateCard;
