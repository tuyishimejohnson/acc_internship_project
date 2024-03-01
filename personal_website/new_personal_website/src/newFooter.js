import React from "react";
import { Outlet, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";

const NewFooter = () => {
  return (
    <div className="flex border-y-2 justify-around border-gray-900 bg-gray-800">
      <div className="my-4 space-y-2 bg-blue-900 w-44 pl-5 py-3">
        <p className="hover:text-gray-400">
          <Link to="/signup">Register</Link>
        </p>
        <p className="hover:text-gray-400">
          <Link to="/login">Login</Link>
        </p>
        <p className="hover:text-gray-400">
          <Link to="/profile">Profile</Link>
        </p>
        <p className="hover:text-gray-400">
          <Link to="/courses">Courses</Link>
        </p>
        <p className="hover:text-gray-400">
          <Link to="/researches">Researches</Link>
        </p>
        <p className="hover:text-gray-400">
          <Link to="/services">Services</Link>
        </p>
        <p className="hover:text-gray-400">
          <Link to="/dashboard">Dashboard</Link>
        </p>
        <p className="hover:text-gray-400">
          <Link to="/contacts">Reach to us</Link>
        </p>
      </div>
      <div className="w-2/4 text-center items-center flex">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae enim
          itaque, modi fuga illum inventore voluptas soluta tempore atque
          voluptate, est nemo, in similique ipsa rem eligendi veritatis culpa
          praesentium?
          <div className="flex justify-center space-x-5 mt-7">
            <FontAwesomeIcon icon={faInstagram} className="w-10 h-10" />
            <FontAwesomeIcon icon={faTwitter} className="w-10 h-10" />
            <FontAwesomeIcon icon={faGithub} className="w-10 h-10" />
            <FontAwesomeIcon icon={faDiscord} className="w-10 h-10" />
          </div>
        </p>
      </div>

      <div className="w-1/4 flex items-center justify-center">
        <img src={require("./Untitled (1).png")} alt="" className="w-2/4" />
      </div>
      <Outlet />
    </div>
  );
};

export default NewFooter;
