import React from "react";
import Logo from "../assets/Logo.png";
import { Link } from "react-router-dom";
export default function Navbar() {
  const handleClose = () =>{
    const ele = document.getElementById("mobileMenu")
    const btn = document.getElementById("menuButton")
    const ul = document.getElementById("ul")
    ul.classList.remove("left-0")
    setTimeout(()=>{
      btn.classList.remove("hidden")
      ele.classList.add("hidden")
    },500)
    console.log(ele);
  }
  const handleOpen = () =>{
    const ele = document.getElementById("mobileMenu")
    const btn = document.getElementById("menuButton")
    const ul = document.getElementById("ul")
    btn.classList.add("hidden")
    ele.classList.remove("hidden")
    setTimeout(()=>{
      ul.classList.add("left-0")
    },1)
    console.log(ele);

  }
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
          to="/phishingchecker"
          className="md:text-base lg:text-xl hidden md:block font-jura"
        >
          PHISH CATHER
        </Link>
        <Link
          to="/contact"
          className="md:text-base lg:text-xl hidden md:block font-jura"
        >
          CONTACT
        </Link>
        <Link
          to="/about"
          className="md:text-base lg:text-xl hidden md:block font-jura"
        >
          ABOUT
        </Link>

        <li className="md:text-base lg:text-xl md:hidden">
          <svg
          onClick={handleOpen}
          id="menuButton"
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

      {/* Mobile Side Navbar */}
      <div id="mobileMenu" className="h-screen w-full bg-[#000000ae] fixed top-0 flex items-start justify-between hidden">
        <ul id="ul" className="bg-gradient-to-r from-black to-[#003706] relative -left-96  transition-all duration-500 h-full space-y-3 w-fit p-3 pr-7 sm:p-4">
          <li>
            <Link to="/" className="mr-auto flex items-center gap-2">
              <img src={Logo} alt="logo" className="w-9 md:w-14" />
              <p className="text-xl md:text-2xl lg:text-3xl font-juli">
                SECUREDVERSE
              </p>
            </Link>
          </li>
          <Link to="/" className="block bg-[#0033ff24] text-cyan-200 ps-2 py-1 rounded-md">
            HOME
          </Link>
          <Link to="/phishingchecker" className="block ps-2 py-1 rounded-md">PHISH CATCHER</Link>
          <Link to="/contact" className="block ps-2 py-1 rounded-md">CONTACT</Link>
          <Link to="/about" className="block ps-2 py-1 rounded-md">ABOUT</Link>
        </ul>
        <svg
        onClick={handleClose}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          dataSlot="icon"
          className="w-7 h-7 m-3 sm:m-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </div>
    </>
  );
}
