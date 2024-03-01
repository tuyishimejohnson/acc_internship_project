import React, { useState, useEffect } from "react";
import "./courses.css";
import { Outlet, Link } from "react-router-dom";

const Header = () => {
  const [changed, setChanged] = useState(false);
  useEffect(() => {
    const handlingScroll = () => {
      if (window.scrollY > 0) {
        setChanged(true);
      } else {
        setChanged(false);
      }
    };

    window.addEventListener("scroll", handlingScroll);

    return () => {
      window.removeEventListener("scroll", handlingScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`flex justify-around items-center fixed top-0 left-0 right-0 duration-300 ${
          changed ? "bg-white text-black" : "bg-transparent"
        }`}
      >
        <img src={require("./Untitled (1).png")} alt="" className="w-12" />
        <nav className="flex space-x-5">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link>Profile</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/courses">Courses</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/researches">Researches</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/services">Services</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </nav>

        <div className="space-x-6">
          <Link to="/login">
            <button>Login</button>
          </Link>
          <Link to="/signup">
            <button>Sign Up</button>
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Header;
