/* eslint-disable jsx-a11y/heading-has-content */
import { useState } from "react";
import MainContent from "./components/MainContent";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";

function Navbar() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setMobileNavOpen(!mobileNavOpen);
  };

  return (
    <>
      <div className="bg-white flex justify-between items-center px-16 py-8 font-medium shadow-md">
        <div>
          <h1 className="text-4xl bg-custom-color p-4 rounded-2xl h-11 w-11"></h1>
        </div>
        <div className="hidden md:block">
          <ul className="flex items-center gap-5 font-playfair text-4xl">
            <li className="hover:cursor-pointer">Contact</li>
            <li className="hover:cursor-pointer">Work</li>
            <li>
              <button className="bg-custom-color-1 px-2 py-2 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>
            </li>
          </ul>
        </div>
        <div className="md:hidden">
          <button
            className="bg-custom-color-1 px-2 py-2 rounded-full"
            onClick={toggleMobileNav}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        {mobileNavOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-md py-4">
            <ul className="flex flex-col items-center gap-5 font-playfair text-2xl">
              <li className="hover:cursor-pointer">Contact</li>
              <li className="hover:cursor-pointer">Work</li>
            </ul>
          </div>
        )}
      </div>
      <MainContent />
      <Section2 />
      <Section3 />
      <Section4 />
    </>
  );
}

export default Navbar;
