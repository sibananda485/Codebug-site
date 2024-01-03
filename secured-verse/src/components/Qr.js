import React from "react";
import QrCode from "../assets/qr.png";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Qr() {
  return (
    <>
      <div className="bg-gradient-to-r from-black to-[#003706] text-white">
        <div className="relative max-w-7xl mx-auto pb-32">
          <Navbar></Navbar>
          <div className="pt-28 h-screen">
          <h1 className="font-juli text-3xl md:text-5xl text-center mb-10">
            Scan to redirect to website
          </h1>
            <p className="text-center text-lg">codebug-site.vercel.app</p>
            <img className="mx-auto my-auto" src={QrCode} alt="" />
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
