import React from "react";
import Intro from "../assets/rubberDuckey/DUCKY.png";
import Navbar from "./Navbar";
import Main from "../assets/rubberDuckey/duckey.webp";
import Footer from "./Footer";

export default function Duckey() {
  window.scrollTo(0, 0);
  return (
    <>
      {/* Intro */}
      <div className="bg-gradient-to-r from-black to-[#003706]">
        <div className="relative mx-auto max-w-7xl text-white py-28 flex flex-col justify-center items-center gap-5 lg:py-32 lg:gap-10">
          <Navbar></Navbar>
          <img src={Main} alt="fishing" className="rounded-full w-40 lg:w-72" />
          <h1 className="font-juli text-3xl md:text-5xl">USB Rubber Ducky</h1>

          <p className="font-advent text-lg text-center text-[rgba(255,255,255,0.68)] px-2 md:text-2xl sm:px-10 xl:px-56 lg:text-start">
            The USB Rubber Ducky is a specialized USB device developed by Hak5
            for penetration testing and ethical hacking purposes. It is designed
            to emulate a Human Interface Device (HID), specifically a USB
            keyboard. While appearing as a standard USB flash drive, the Rubber
            Ducky functions as a keystroke injection tool, allowing users to
            send pre-programmed keystrokes to a target computer.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl ">

        {/* Disclaimer */}
        <div className="text-white space-y-5 px-2 my-10 lg:my-10 lg:px-48 ">
          <h1 className="font-handjet text-red-500 text-3xl md:text-5xl text-center">
            Disclaimer: Educational Purpose Only
          </h1>
          <p className="font-ibm text-red-500 text-xs px-2 font-semibold">
            The tools provided herein are intended solely for educational
            purposes. Users are reminded that any utilization of these tools in
            any other context, including but not limited to commercial,
            professional, or non-educational settings, is strictly prohibited.
            The creators and distributors of these tools do not endorse or
            encourage any misuse, unauthorized access, or any activities that
            violate applicable laws or regulations.
          </p>
        </div>

        <img src={Intro} alt="" className="lg:mx-auto my-5 lg:mb-20" />
      </div>
      
      <Footer></Footer>
    </>
  );
}
