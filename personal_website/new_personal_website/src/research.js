import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Research = () => {
  return (
    <>
      <div className="bg-black min-h-screen">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center font-semibold py-5">
            <img
              src={require("./Untitled (1).png")}
              alt="logo icon"
              className="w-12"
            />
            <nav className="hidden md:block">
              <ul className="flex gap-6 items-center justify-center">
                <li className="hover:bg-gray-200 rounded-sm">
                  <a href="#profile">Profile</a>
                </li>
                <li className="hover:bg-gray-200 rounded-sm">
                  <a href="#courses">
                    Courses
                    <FontAwesomeIcon
                      icon={faCaretDown}
                      className="px-2 items-center"
                    />
                  </a>
                </li>
                <li className="hover:bg-gray-200 rounded-sm">
                  <a href="research">
                    Research
                    <FontAwesomeIcon
                      icon={faCaretDown}
                      className="px-2 items-center"
                    />
                  </a>
                </li>
                <li className="hover:bg-gray-200 rounded-sm">
                  <a href="services">
                    Services
                    <FontAwesomeIcon
                      icon={faCaretDown}
                      className="px-2 items-center"
                    />
                  </a>
                </li>
                <li className="hover:bg-gray-200 rounded-sm">
                  <a href="dashboard">Dashboard</a>
                </li>
              </ul>
            </nav>
            {/* <div>
              <button className="bg-blue-600 px-3 py-2 rounded hover:bg-blue-500">
                Login
              </button>
              <button className="bg-gray-600 px-3 py-2 rounded hover:bg-gray-500">
                Sign Up
              </button>
            </div> */}
          </div>
          <h2 className="text-3xl font-semibold my-6">Researches</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              className="bg-white p-6 rounded-lg shadow-md"
              style={{
                backgroundImage: `url(${require("./Manufacturing-tech-Jan-18-2023-web.png")})`,
                backgroundSize: "cover",
              }}
            >
              <h3 className="text-xl font-semibold mb-3 text-white">
                Research 1
              </h3>
              <p className="text-gray-200 mb-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo hic esse natus corporis iure officia qui quo vel
                accusamus numquam perspiciatis eos repudiandae deserunt
                adipisci, similique officiis modi impedit quis. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Provident illo
                dolorem similique quia magnam modi, ad ipsum. Illo, nemo modi?
                Aspernatur inventore eos laudantium ratione quod nesciunt enim
                vel esse!
              </p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Read more
              </button>
            </div>
            <div
              className="bg-white p-6 rounded-lg shadow-md"
              style={{
                backgroundImage: `url(${require("./images.jpg")})`,
                backgroundSize: "cover",
              }}
            >
              <h3 className="text-xl font-semibold mb-3 text-white">
                Research 2
              </h3>
              <p className="text-gray-200 mb-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo hic esse natus corporis iure officia qui quo vel
                accusamus numquam perspiciatis eos repudiandae deserunt
                adipisci, similique officiis modi impedit quis. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Provident illo
                dolorem similique quia magnam modi, ad ipsum. Illo, nemo modi?
                Aspernatur inventore eos laudantium ratione quod nesciunt enim
                vel esse!
              </p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Read more
              </button>
            </div>
            <div
              className="bg-white p-6 rounded-lg shadow-md"
              style={{
                backgroundImage: `url(${require("./images.jpg")})`,
                backgroundSize: "cover",
              }}
            >
              <h3 className="text-xl font-semibold mb-3 text-white">
                Research 3
              </h3>
              <p className="text-gray-200 mb-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo hic esse natus corporis iure officia qui quo vel
                accusamus numquam perspiciatis eos repudiandae deserunt
                adipisci, similique officiis modi impedit quis. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Provident illo
                dolorem similique quia magnam modi, ad ipsum. Illo, nemo modi?
                Aspernatur inventore eos laudantium ratione quod nesciunt enim
                vel esse!
              </p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Read more
              </button>
            </div>

            <div className="p-6 rounded-lg " style={{ color: "blue" }}>
              <FontAwesomeIcon icon={faArrowRight} size="2xl" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Research;
