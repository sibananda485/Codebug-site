import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FishingLogo from "../assets/networkScan/networkScan.png";
import a1 from "../assets/networkScan/1.png";
import a2 from "../assets/networkScan/2.png";
import a3 from "../assets/networkScan/3.png";
import a4 from "../assets/networkScan/4.png";
import NetworkScanningIntro from "../assets/networkScan/NetworkScanning.jpeg";

import Terminal from "./Terminal";

export default function NetworkScanning() {
  window.scrollTo(0, 0);
  return (
    <>
      {/* Intro */}
      <div className="bg-gradient-to-r from-black to-[#003706]">
        <div className="relative mx-auto max-w-7xl text-white py-28 flex flex-col justify-center items-center gap-5 lg:py-32 lg:gap-10">
          <Navbar></Navbar>
          <img src={FishingLogo} alt="fishing" className="w-40 lg:w-72" />
          <h1 className="font-juli text-3xl md:text-5xl">Network Scanning</h1>
          <p className="font-advent text-lg text-center text-[rgba(255,255,255,0.68)] px-2 md:text-2xl sm:px-10 xl:px-56 lg:text-start">
            Network scanning is a process used in the field of cybersecurity to
            discover and gather information about devices, systems, and services
            on a computer network. It involves systematically probing a network
            to identify live hosts, open ports, and other details that can be
            crucial for understanding the network's structure and potential
            vulnerabilities. Network scanning is a common practice used by both
            security professionals and malicious actors, making it important for
            defensive purposes as well.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl">

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

        <img src={NetworkScanningIntro} alt="" className="lg:mx-auto my-5 lg:mb-20 shadow-2xl"/>


        {/* Method 1 */}
        <div className="bg-gradient-to-r from-black to-[#003706] text-white rounded-xl flex flex-col justify-center gap-5 md:gap-10 shadow-xl px-3 py-5 mb-5 mx-3 lg:mb-20 lg:py-16 lg:px-28">
          <h2 className="font-lec font-bold text-[#F2F603] text-sm lg:text-2xl">
            Usage:
          </h2>
          <h1 className="font-juli text-3xl md:text-5xl">Method 1:</h1>
          <Terminal text="nmap -sP 192.168.0.1/24"></Terminal>

          <img src={a1} alt="terminal" className="my-5 md:max-w-2xl" />

          <h2 className="font-lec font-bold text-[#00FF19] text-sm lg:text-2xl">
            This command is used to perform a ping scan on a range of IP
            addresses within the specified subnet.
          </h2>
          <h2 className="font-lec font-bold text-[#F2F603] text-sm lg:text-2xl">
            <span className="text-red-500">Explanation:</span> <br />
            The command nmap -sP 192.168.0.1/24 will send ICMP echo requests to
            each IP address within the specified subnet (192.168.0.1 to
            192.168.0.254). It is a quick way to identify which hosts in the
            given IP range are responsive and alive on the network. This type of
            scan is often used for host discovery to create an initial inventory
            of live hosts before more detailed scans are performed.
          </h2>
        </div>

        {/* Method 2 */}
        <div className="bg-gradient-to-r from-black to-[#003706] text-white rounded-xl flex flex-col justify-center gap-5 md:gap-10 shadow-xl px-3 py-5 mb-5 mx-3 lg:mb-20 lg:py-16 lg:px-28">
          <h1 className="font-juli text-3xl md:text-5xl">Method 2:</h1>
          <Terminal text="sudo nmap -sT -p 80,443 192.168.0.1/24"></Terminal>

          <img src={a2} alt="terminal" className="my-5 md:max-w-2xl" />

          <h2 className="font-lec font-bold text-[#00FF19] text-sm lg:text-2xl">
            This is used to perform a TCP connect scan (-sT) targeting the
            specified ports 80 (HTTP) and 443 (HTTPS) on hosts within the IP
            range 192.168.0.1 to 192.168.0.254.
          </h2>
          <h2 className="font-lec font-bold text-[#F2F603] text-sm lg:text-2xl">
            <span className="text-red-500">Explanation:</span> <br />
            The command sudo nmap -sT -p 80,443 192.168.0.1/24 will perform a
            TCP connect scan on the specified ports (80 and 443) for hosts
            within the specified IP range. The scan will attempt to establish a
            connection to these ports on each target host, providing information
            about whether the ports are open or closed.
          </h2>
        </div>

        {/* Method 3 */}
        <div className="bg-gradient-to-r from-black to-[#003706] text-white rounded-xl flex flex-col justify-center gap-5 md:gap-10 shadow-xl px-3 py-5 mb-5 mx-3 lg:mb-20 lg:py-16 lg:px-28">
          <h1 className="font-juli text-3xl md:text-5xl">Method 3:</h1>
          <Terminal text="sudo nmap -sS -p 80,443 192.168.0.1/24"></Terminal>

          <img src={a3} alt="terminal" className="my-5 md:max-w-2xl" />

          <h2 className="font-lec font-bold text-[#00FF19] text-sm lg:text-2xl">
            This is used to perform a TCP SYN scan (-sS) on the specified ports
            80 (HTTP) and 443 (HTTPS) for hosts within the IP range 192.168.0.1
            to 192.168.0.254.
          </h2>
          <h2 className="font-lec font-bold text-[#F2F603] text-sm lg:text-2xl">
            <span className="text-red-500">Explanation:</span> <br />
            The command sudo nmap -sS -p 80,443 192.168.0.1/24 will perform a
            TCP SYN scan on the specified ports (80 and 443) for hosts within
            the specified IP range. The SYN scan is stealthier than a TCP
            connect scan because it doesn't complete the connection
            establishment process, making it less likely to be logged by
            intrusion detection systems.
          </h2>
        </div>

        {/* Method 4 */}
        <div className="bg-gradient-to-r from-black to-[#003706] text-white rounded-xl flex flex-col justify-center gap-5 md:gap-10 shadow-xl px-3 py-5 mb-5 mx-3 lg:mb-20 lg:py-16 lg:px-28">
          <h1 className="font-juli text-3xl md:text-5xl">Method 4:</h1>
          <Terminal text="man nmap"></Terminal>

          <img src={a4} alt="terminal" className="my-5 md:max-w-2xl" />

          <h2 className="font-lec font-bold text-[#00FF19] text-sm lg:text-2xl">
            The man command in Unix-like operating systems is used to display
            the manual pages for a given command
          </h2>
          <h2 className="font-lec font-bold text-[#F2F603] text-sm lg:text-2xl">
            <span className="text-red-500">Explanation:</span> <br />
            This command will display the comprehensive manual page for Nmap,
            providing detailed information on its various options, usage, and
            functionality. You can navigate through the manual page using the
            arrow keys, and you can exit the manual viewer by pressing the q
            key.
          </h2>
        </div>
        
      </div>
      <Footer></Footer>
    </>
  );
}
