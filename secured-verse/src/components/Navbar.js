import React from "react";
import Logo from "../assets/Logo.png";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <>
      <ul className="absolute top-0 flex gap-5 w-full justify-end items-center p-3 sm:p-4">
        <Link to="/" className="mr-auto flex items-center gap-2">
          <img src={Logo} alt="logo" className="w-9 md:w-14" />
          <p className="text-xl md:text-2xl lg:text-3xl font-juli">
            SECUREDVERSE
          </p>
        </Link>
        <Link
          to="/"
          className="md:text-base lg:text-xl hidden md:block font-jura"
        >
          HOME
        </Link>
        <Link
          to="/fishingchecker"
          className="md:text-base lg:text-xl hidden md:block font-jura"
        >
          PHISH CATHER
        </Link>
        <Link
          to="/"
          className="md:text-base lg:text-xl hidden md:block font-jura"
        >
          CONTACT
        </Link>
        <Link
          to="/"
          className="md:text-base lg:text-xl hidden md:block font-jura"
        >
          ABOUT
        </Link>
      
        <li className="md:text-base lg:text-xl md:hidden">
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
              d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
            />
          </svg>
        </li>
      </ul>
    </>
  );
}
