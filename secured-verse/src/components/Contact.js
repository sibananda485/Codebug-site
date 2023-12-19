import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer"; 
import Img from "../assets/cyber_security.jpg"

export default function Contact() {
  return (
    <>
    <div className="bg-gradient-to-r from-black to-[#003706] text-white">
      <div class="relative max-w-7xl mx-auto h-screen py-32">
        <Navbar></Navbar>
        <div
          class="justify-center item-center flex w-[100vm]"
          id="cont"
        >
          <div class="w-96 h-96 mr-20" id="contact">
            <form name="contact-form" class="mt-10">
              <h1 class="font-roboto text-center ml-3 text-5xl text-white">
                Contact Us
              </h1>
              <input
                class="rounded-2xl p-4 border-solid border-2 border-black w-72 ml-10 mt-5 md:w-96 outline-none border-none"
                type="text"
                name="Name"
                placeholder="Name"
              />
              <input
                class="rounded-2xl p-4 border-solid border-2 border-black w-72 ml-10 mt-5 md:w-96 outline-none border-none"
                type="email"
                name="Email"
                placeholder="Email"
              />
              <textarea
                class="rounded-2xl p-4 border-solid border-2 border-black w-72 ml-10 mt-5 md:w-96 outline-none border-none"
                name="Message"
                rows="7"
                placeholder="Your Message"
              ></textarea>
              <button
                id="submit"
                class="bg-transparent border-2 rounded-lg border-white w-40 h-10 text-white sm:ml-40 ml-24 mt-2"
              >
                Submit
              </button>
            </form>
          </div>
          <img
            class="h-[600px] :w-[450px] ml-11 rounded-xl hidden xl:block"
            src={Img}
            alt=""
          />
        </div>
      </div>
      </div>
      <Footer></Footer>
    </>
  );
}
