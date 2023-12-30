import React from "react";
import Navbar from "./Navbar";
import FishingLogo from "../assets/ddos/ddos.png";
import Terminal from "./Terminal";
import a1 from "../assets/ddos/1.png";
import a2 from "../assets/ddos/2&4.png";
import a3 from "../assets/ddos/3.png";
import DOSANDDOS from "../assets/ddos/DOS AND DDOS.png"
import Intro from "../assets/ddos/DOS.png"
import Footer from "./Footer"; 

export default function Ddos() {
  window.scrollTo(0, 0);
  return (
    <>
      {/* Intro */}
      <div className="bg-gradient-to-r from-black to-[#003706]">
        <div className="relative mx-auto max-w-7xl text-white py-28 flex flex-col justify-center items-center gap-5 lg:py-32 lg:gap-10">
          <Navbar></Navbar>
          <img src={FishingLogo} alt="fishing" className="w-40 lg:w-72" />
          <h1 className="font-juli text-3xl md:text-5xl">DOS / DDOS</h1>
          <p className="font-advent text-lg text-center text-[rgba(255,255,255,0.68)] px-2 md:text-2xl sm:px-10 xl:px-56 lg:text-start">
            <span className="font-bold">DoS</span> : A Denial of Service (DoS)
            attack occurs when an attacker overwhelms a target system with a
            flood of traffic, causing it to become slow, unresponsive, or
            completely unavailable to legitimate users.
          </p>
          <p className="font-advent text-lg text-center text-[rgba(255,255,255,0.68)] px-2 md:text-2xl sm:px-10 xl:px-56 lg:text-start">
            <span className="font-bold">DDoS</span> : A Distributed Denial of
            Service (DDoS) attack is an extension of the DoS attack, where
            multiple compromised computers (often referred to as a botnet) are
            used to launch the attack simultaneously. This makes it more
            difficult to mitigate and trace the source of the attack.
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

        <img src={DOSANDDOS} alt="" className="lg:mx-auto my-5 lg:mb-20 shadow-2xl"/>
        <img src={Intro} alt="" className="lg:mx-auto my-5 lg:mb-20 shadow-2xl"/>

        {/* Method 1 */}
        <div className="bg-gradient-to-r from-black to-[#003706] text-white rounded-xl flex flex-col justify-center gap-5 md:gap-10 shadow-xl px-3 py-5 mb-5 mx-3 lg:mb-20 lg:py-16 lg:px-28">
          <h1 className="font-juli text-3xl md:text-5xl">Method 1:</h1>
          <Terminal text="sudo hping3 -1 —flood 192.168.0.113"></Terminal>
          <Terminal text="cd zphisher"></Terminal>
          <img src={a1} alt="terminal" className="my-5 md:max-w-2xl" />

          <h2 className="font-lec font-bold text-[#F2F603] text-sm lg:text-2xl">
            <span className="text-red-500">Effect after Execution:</span> <br />
            The command, when executed, will flood the target IP address with a
            high volume of ICMP Echo Request packets. This flood of ping
            requests can overwhelm the target's network and potentially lead to
            a denial of service condition, making it slow, unresponsive, or
            completely unavailable to legitimate users.
          </h2>
          <h2 className="font-lec font-bold text-sm lg:text-2xl">Result:</h2>
          <img src={a2} alt="terminal" className="my-5 md:max-w-2xl" />
        </div>

        {/* Method 2 */}
        <div className="bg-gradient-to-r from-black to-[#003706] text-white rounded-xl flex flex-col justify-center gap-5 md:gap-10 shadow-xl px-3 py-5 mb-5 mx-3 lg:mb-20 lg:py-16 lg:px-28">
          <h1 className="font-juli text-3xl md:text-5xl">Method 2:</h1>
          <Terminal text="sudo hping3 -d 200 -p 80 -S --flood 192.168.0.113"></Terminal>

          <img src={a3} alt="terminal" className="my-5 md:max-w-2xl" />

          <h2 className="font-lec font-bold text-[#F2F603] text-sm lg:text-2xl">
            <span className="text-red-500">Effect after Execution:</span> <br />
            The command, when executed, will flood the target IP address with a
            high volume of ICMP Echo Request packets. This flood of ping
            requests can overwhelm the target's network and potentially lead to
            a denial of service condition, making it slow, unresponsive, or
            completely unavailable to legitimate users.
          </h2>
          <h2 className="font-lec font-bold text-sm lg:text-2xl">Result:</h2>
          <img src={a2} alt="terminal" className="my-5 md:max-w-2xl" />
        </div>

      </div>
      <Footer></Footer>
    </>
  );
}
