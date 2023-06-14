import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAddress } from "@thirdweb-dev/react";

const BuildForm = () => {
  const address = useAddress();

  const [logo, setLogo] = useState("");
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const [introduction, setintroduction] = useState("");
  const [instagram, setinstagram] = useState("");
  const [twitter, setTwitter] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [website, setWebsite] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();

    const newProject = {
      walletAddress: address, // Assuming the project has _id as its unique identifier
      url, // Assuming the project has a 'name' property
      logo,
      title,
      introduction,
      instagram,
      twitter,
      linkedin,
      website,
      applicationStatus: "false",
    };

    try {
      const res = await axios.post(
        "http://localhost:5000/api/projects",
        newProject
      );
      console.log(res.data);
    } catch (error) {
      console.error("Error submitting the form", error);
    }
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold text-center my-4">Application Form</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            className="block text-black text-sm font-bold mb-2"
            htmlFor="certificateName"
          >
            Project Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-black"
            id="certificateName"
            type="text"
            placeholder="Enter project name"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-black text-sm font-bold mb-2"
            htmlFor="description"
          >
            Introduction
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-black"
            id="description"
            placeholder="Enter description"
            value={introduction}
            onChange={(e) => setintroduction(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-black text-sm font-bold mb-2"
            htmlFor="description"
          >
            url
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-black"
            id="url"
            placeholder="Enter your web url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-black text-sm font-bold mb-2"
            htmlFor="description"
          >
            Instagram
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-black"
            id="description"
            placeholder="Enter description"
            value={instagram}
            onChange={(e) => setinstagram(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-black text-sm font-bold mb-2"
            htmlFor="description"
          >
            Twitter
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-black"
            id="description"
            placeholder="Enter description"
            value={twitter}
            onChange={(e) => setTwitter(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-black text-sm font-bold mb-2"
            htmlFor="description"
          >
            LinkedIn
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-black"
            id="description"
            placeholder="Enter description"
            value={linkedin}
            onChange={(e) => setLinkedin(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-black text-sm font-bold mb-2"
            htmlFor="description"
          >
            Website
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-black"
            id="website"
            placeholder="Enter your web site url"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-black text-sm font-bold mb-2"
            htmlFor="logo"
          >
            Logo
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-black"
            id="logo"
            type="text"
            placeholder="Enter logo URL"
            value={logo}
            onChange={(e) => setLogo(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Apply
          </button>
        </div>
      </form>
    </div>
  );
};

export default BuildForm;
