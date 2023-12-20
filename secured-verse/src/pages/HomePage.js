import React from "react";
import { Link } from "react-router-dom";
import Output from "../images/output_image (1) 1.png";
import Comedic from "../images/comedic-tux-linux-desktop-graphic-design-du1t7jopnaduzciv_prev_ui (1) 1.png";
import Man from "../images/man using a cyber security program 1.png";
import What from "../images/what-is-cyber-security-1024x683 1.png";
import Img from "../images/images 1.png";
import Cyber from "../images/cybersecurity 1.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <>
      <div className=" text-white">
        <div className="bg-[#010418] ">
          <div className="relative max-w-7xl pt-14 mx-auto">
            <Navbar></Navbar>
            <img src={Output} alt="output" />
          </div>
        </div>

        {/* ellipse */}
        <div className="w-full h-auto bg-white rounded-t-3xl">
          <h1 className="text-center mb-5 pt-2 text-black font-light font-['Handjet'] text-4xl md:text-7xl">
            ARE YOU SECURE ?
          </h1>
          <div className="md:flex flex flex-wrap w-full justify-evenly">
            <div className="bg-gradient-to-b from-black via-black to-teal-950 rounded-[20px] w-[250px] h-[250px] md:w-[500px] md:h-[500px]">
              <img src={Comedic} alt="alt" />
            </div>
            <div>
              <Link
                to="/scriptmenu"
                className="block md:w-[500px] md:h-[120px] w-[80vw] h-[100px] md:my-4 my-6 bg-slate-50 rounded-[10px] border-2 shadow-2xl"
              >
                <h1 className="text-slate-900 text-[12px] md:text-[35px] font-normal font-['Jaldi'] md:pt-0 pt-2 px-2">
                  ULTIMATE SCRIPT
                </h1>
                <div className="text-black text-opacity-70 text-sm md:text-lg font-normal font-['Jaldi'] p-2">
                  WE ARE PROVIDING HACKING SCRIPTS THAT CAN HELP YOU LEARN ABOUT
                  SECURITY
                </div>
              </Link>
              <div className="md:w-[500px] md:h-[120px] w-[80vw] h-[100px] md:my-4 my-6 bg-slate-50 rounded-[10px] border-2 shadow-2xl">
                <Link
                  to="/"
                  className="text-slate-900 text-[12px] md:text-[35px] font-normal font-['Jaldi'] md:pt-0 pt-2 px-2"
                >
                  LEARN MORE
                </Link>
                <div className="text-black text-opacity-70 text-sm md:text-lg font-normal font-['Jaldi'] p-2">
                  WE ARE PROVIDING HACKING SCRIPTS THAT CAN HELP YOU LEARN ABOUT
                  SECURITY
                </div>
              </div>
              <div className="md:w-[500px] md:h-[120px] w-[80vw] h-[100px] md:my-4 my-6 bg-slate-50 rounded-[10px] border-2 shadow-2xl">
                <Link
                  to="/books"
                  className="text-slate-900 text-[12px] md:text-[35px] font-normal font-['Jaldi'] md:pt-0 pt-2 px-2"
                >
                  FREE BOOKS
                </Link>
                <div className="text-black text-opacity-70 text-sm md:text-lg font-normal font-['Jaldi'] p-2">
                  WE ARE PROVIDING HACKING SCRIPTS THAT CAN HELP YOU LEARN ABOUT
                  SECURITY
                </div>
              </div>
              <div className="md:w-[500px] md:h-[120px] w-[80vw] h-[100px] md:my-4 my-6 bg-slate-50 rounded-[10px] border-2 shadow-2xl">
                <Link
                  to="/networkscan"
                  className="text-slate-900 text-[12px] md:text-[35px] font-normal font-['Jaldi'] md:pt-0 pt-2 px-2"
                >
                  NETWORK SCANNING
                </Link>
                <div className="text-black text-opacity-70 text-sm md:text-lg font-normal font-['Jaldi'] p-2">
                  WE ARE PROVIDING HACKING SCRIPTS THAT CAN HELP YOU LEARN ABOUT
                  SECURITY
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full items-center justify-evenly text-black md:text-7xl text-4xl mt-2 mb-16 font-['Julius Sans One'] font-normal">
            <div>←</div>
            <div>EXPLORE US</div>
            <div>→</div>
          </div>
          <div className="w-[90vw] h-fit bg-gradient-to-b from-rose-900 to-black rounded-[15px] shadow text-black m-auto flex flex-col justify-between">
            <div className="md:w-[1000px] md:h-[408px] w-[375px] bg-white bg-opacity-50 rounded-[10px] shadow md:m-auto md:my-16 md:flex md:flex-row flex-col md:items-center m-auto my-16">
              <img
                className="md:w-[550px] md:h-80 w-[350px] rounded-[10px] mx-auto md:mx-4"
                src={Man}
                alt=""
              />
              <div className="m-auto md:p-0 p-2">
                <div className="text-center text-white text-[30px] font-['KoHo']">
                  HEADING
                </div>
                <div className="text-white md:text-2xl font-normal md:text-left fpnt-['KoHo']">
                  A paragraph is a series of sentences that are organized and
                  coherent, and are all related to a single topic. Almost every
                  piece of writing you do that is longer than a few sentences
                  should be organized into paragraphs.
                </div>
              </div>
            </div>
            <div className="md:w-[1000px] md:h-[408px] w-[375px] bg-white bg-opacity-50 rounded-[10px] shadow md:m-auto md:my-16 md:flex md:flex-row-reverse flex-col md:items-center m-auto mb-8">
              <img
                className="md:w-[550px] md:h-80 w-[350px] rounded-[10px] mx-auto md:mx-4 pt-1"
                src={What}
                alt=""
              />
              <div className="m-auto md:p-0 p-2">
                <div className="text-center text-white text-[30px] font-['KoHo']">
                  HEADING
                </div>
                <div className="text-white md:text-2xl font-normal md:text-right fpnt-['KoHo'] md:px-2">
                  A paragraph is a series of sentences that are organized and
                  coherent, and are all related to a single topic. Almost every
                  piece of writing you do that is longer than a few sentences
                  should be organized into paragraphs.
                </div>
              </div>
            </div>
            <div className="md:w-[1000px] md:h-[408px] w-[375px] bg-white bg-opacity-50 rounded-[10px] shadow md:m-auto md:my-16 md:flex md:flex-row flex-col md:items-center m-auto mt-8">
              <img
                className="md:w-[550px] md:h-80 w-[350px] rounded-[10px] mx-auto md:mx-4 pt-1"
                src={Img}
                alt=""
              />
              <div className="m-auto md:p-0 p-2">
                <div className="text-center text-white text-[30px] font-['KoHo']">
                  HEADING
                </div>
                <div className="text-white md:text-2xl font-normal md:text-left fpnt-['KoHo']">
                  A paragraph is a series of sentences that are organized and
                  coherent, and are all related to a single topic. Almost every
                  piece of writing you do that is longer than a few sentences
                  should be organized into paragraphs.
                </div>
              </div>
            </div>
            <div className="md:w-[1000px] md:h-[408px] w-[375px] bg-white bg-opacity-50 rounded-[10px] shadow md:m-auto md:my-16 md:flex md:flex-row-reverse flex-col md:items-center m-auto my-16">
              <img
                className="md:w-[550px] md:h-80 w-[350px] rounded-[10px] mx-auto md:mx-4 pt-1"
                alt=""
                src={Cyber}
              />
              <div className="m-auto md:p-0 p-2">
                <div className="text-center text-white text-[30px] font-['KoHo'] md:px-2">
                  HEADING
                </div>
                <div className="text-white md:text-2xl font-normal md:text-right fpnt-['KoHo']">
                  A paragraph is a series of sentences that are organized and
                  coherent, and are all related to a single topic. Almost every
                  piece of writing you do that is longer than a few sentences
                  should be organized into paragraphs.
                </div>
              </div>
            </div>
          </div>
          <Footer></Footer>
        </div>
      </div>
    </>
  );
}
