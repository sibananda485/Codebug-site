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
          <h1 className="text-center my-10 pt-2 text-black font-light font-['Handjet'] text-4xl md:text-7xl">
            ARE YOU SECURE ?
          </h1>
          <div className="md:flex flex flex-wrap w-full justify-center items-center gap-20">
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
                  to="/phishingchecker"
                  className="text-slate-900 text-[12px] md:text-[35px] font-normal font-['Jaldi'] md:pt-0 pt-2 px-2"
                >
                  PHISH CATCHER
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
                  to="/contact"
                  className="text-slate-900 text-[12px] md:text-[35px] font-normal font-['Jaldi'] md:pt-0 pt-2 px-2"
                >
                  CONTACT
                </Link>
                <div className="text-black text-opacity-70 text-sm md:text-lg font-normal font-['Jaldi'] p-2">
                  WE ARE PROVIDING HACKING SCRIPTS THAT CAN HELP YOU LEARN ABOUT
                  SECURITY
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full items-center justify-evenly text-black md:text-7xl text-4xl my-5 font-['Julius Sans One'] font-normal">
            <div>←</div>
            <div className="my-5">EXPLORE US</div>
            <div>→</div>
          </div>

          <div class="mx-1 px-2 py-2 max-w-7xl lg:mx-auto bg-gradient-to-r from-black to-[#003706] rounded-xl shadow-2xl text-black">

            <div class="md:w-[1000px] w-fit md:h-[408px] sm:w-[375px] w-[300px bg-white bg-opacity-50 rounded-xl shadow md:m-auto md:my-16 md:flex md:flex-row flex-col md:items-center m-auto mb-8">
              <img
                class="p-1 md:w-[550px] md:h-80 w-[350px] rounded-[10px] md:ml-[-100px] mx-auto md:mx-4"
                src={Man}
                alt=""
              />
              <div class="m-auto pb-8 md:pb-0 md:p-0 p-2">
                <div class="text-center md:text-start px-5 my-5 text-white text-[30px] font-['KoHo']">
                  What is cyber security ?
                </div>
                <div class="text-white text-center md:text-start md:text-2xl font-normal fpnt-['KoHo'] md:px-5">
                  Cybersecurity involves protecting computer systems and data
                  from unauthorized access or damage, ensuring confidentiality,
                  integrity, and availability. It includes measures like
                  authentication, encryption, and network security to counter
                  cyber threats.
                </div>
              </div>
            </div>

            <div class="md:w-[1000px] w-fit md:h-[408px] sm:w-[375px] w-[300px bg-white bg-opacity-50 rounded-xl shadow md:m-auto md:my-16 md:flex md:flex-row-reverse flex-col md:items-center m-auto mb-8">
              <img
                alt=""
                class="p-1 md:w-[550px] md:h-80 w-[350px] rounded-[10px] md:mr-[-100px] mx-auto md:mx-4"
                src={What}
              />
              <div class="m-auto pb-8 md:pb-0 md:p-0 p-2">
                <div class="text-center  md:text-start my-5 text-white px-5 text-[30px] font-['KoHo']">
                  What is cyber crime ?
                </div>
                <div class="text-white text-center md:text-start md:text-2xl font-normal fpnt-['KoHo'] md:px-5">
                  Cybercrime is illegal activities using digital methods, like
                  hacking, phishing, and malware, to exploit vulnerabilities in
                  computer systems for fraud, theft, or disruption.
                </div>
              </div>
            </div>

            <div class="md:w-[1000px] w-fit md:h-[408px] sm:w-[375px] w-[300px bg-white bg-opacity-50 rounded-xl shadow md:m-auto md:my-16 md:flex md:flex-row flex-col md:items-center m-auto mb-8">
              <img
                class="p-1 md:w-[550px] md:h-80 w-[350px] rounded-[10px] md:ml-[-100px] mx-auto md:mx-4"
                src={Img}
                alt=""
              />
              <div class="m-auto pb-8 md:pb-0 md:p-0 p-2">
                <div class="text-center my-5 text-white text-[30px] font-['KoHo']">
                  Types of hackers -
                </div>
                <div class="text-white w-fit mx-auto text-start md:text-center md:text-start md:text-2xl font-normal fpnt-['KoHo']">
                  1.Whitehat hackers <br />
                  2.Blackhat hackers <br />
                  3.Grayhat hackers <br />
                </div>
              </div>
            </div>

            <div class="md:w-[1000px] w-fit md:h-[408px] sm:w-[375px] w-[300px bg-white bg-opacity-50 rounded-xl shadow md:m-auto md:my-16 md:flex md:flex-row-reverse flex-col md:items-center m-auto mb-8">
              <img
                alt=""
                class="p-1 md:w-[550px] md:h-80 w-[350px] rounded-[10px] md:mr-[-100px] mx-auto md:mx-4"
                src={Cyber}
              />
              <div class="m-auto pb-8 md:pb-0 md:p-0 p-2">
                <div class="text-center md:text-start my-5 text-white text-[30px] font-['KoHo']">
                  Types of cyber attacks -
                </div>
                <div class="text-white w-fit mx-auto md:text-start md:text-2xl font-normal fpnt-['KoHo']">
                  1.System based attacks <br />
                  2.Web based attacks <br />
                  3.Networks based attacks <br />
                  4.Social engineering based hackers <br />
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
