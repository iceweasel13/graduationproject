import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useAddress } from "@thirdweb-dev/react";
const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const address = useAddress();
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [profilePicture, setprofilePicture] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/users/${address}`
        );
        setUser(res.data);
        if (res.data) {
          setprofilePicture(res.data.profilePicture);
          setName(res.data.name);
          setSurname(res.data.surname);
          setUsername(res.data.username);
          setEmail(res.data.email);
        }
      } catch (err) {
        console.error(err);
      }
    };

    if (address) {
      fetchUser();
    }
  }, [address]);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = async () => {
    setIsEditing(false);
    const user = {
      name,
      surname,
      username,
      email,
      profilePicture,
    };

    try {
      await axios.put(`http://localhost:5000/api/users/${address}`, user);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className=" min-h-screen container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-black">Profile</h1>
        {!isEditing && (
          <button
            className="bg-black text-white rounded-lg py-2 px-4"
            onClick={handleEditClick}
          >
            <FontAwesomeIcon icon={faEdit} className="mr-2" /> Edit
          </button>
        )}
        {isEditing && (
          <button
            className="bg-black text-white rounded-lg py-2 px-4"
            onClick={handleSaveClick}
          >
            Save
          </button>
        )}
      </div>

      {/* Profile data */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block mb-2">Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={!isEditing}
            className="w-full p-2 border border-gray-300 rounded-md text-black"
          />
        </div>
        <div>
          <label className="block mb-2">Surname:</label>
          <input
            type="text"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            disabled={!isEditing}
            className="w-full p-2 border border-gray-300 rounded-md text-black"
          />
        </div>
        <div>
          <label className="block mb-2">Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            disabled={!isEditing}
            className="w-full p-2 border border-gray-300 rounded-md text-black"
          />
        </div>
        <div>
          <label className="block mb-2">Email:</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={!isEditing}
            className="w-full p-2 border border-gray-300 rounded-md text-black"
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
