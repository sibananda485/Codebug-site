import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const arr = [
  {
    heading: "Phishing",
    para: "Phishing is a fraudulent communication that appears to come from a legitimate source, such as email or text messages.",
    img: "https://vipre.com/wp-content/uploads/2022/11/spear-phishing.jpeg",
    link: "/phishing",
  },
  {
    heading: "DDOS",
    para: "A Denial of Service (DoS) attack occurs when an attacker overwhelms a target system with a flood of traffic, causing it to become slow, unresponsive, or completely unavailable to legitimate users",
    img: "https://www.rcrwireless.com/wp-content/uploads/2022/12/182638386_s-696x385.jpg",
    position: "left",
    link: "/ddos",
  },
  {
    heading: "Reverse Shell",
    para: "A reverse shell is a type of shell connection initiated by a target system to a remote system. In a traditional shell connection, a client connects to a server to obtain a shell. In a reverse shell scenario, the server (attacker-controlled system) listens for an incoming connection from the target system, and once the connection is established, the attacker gains control over the target's shell.Here's a simplified",
    img: "https://www.inkyvoxel.com/content/images/size/w2000/2023/01/reverse-and-bind-shells.png",
    link: "/reverseshell",
  },
  {
    heading: "Network Scanning",
    para: "Network scanning is a process used in the field of cybersecurity to discover and gather information about devices, systems, and services on a computer network. It involves systematically probing a network to identify live hosts, open ports, and other details that can be crucial for understanding the network's structure and potential vulnerabilities. Network scanning is a common practice used by both security professionals and malicious actors, making it important for defensive purposes as well.",
    img: "https://www.insecure.in/images/article/scanning.webp",
    position: "left",
    link: "/networkscan",
  },
  {
    heading: "Android Payload",
    para: "An Android payload, in the context of cybersecurity and ethical hacking, refers to a piece of code or software designed to be executed on an Android device with the intent of performing a specific action. Payloads are commonly associated with penetration testing, security assessments, and ethical hacking practices. The goal is to understand and demonstrate potential security vulnerabilities in Android systems, applications, or networks.",
    img: "https://img.wonderhowto.com/img/80/81/63585942246015/0/sploit-building-android-applications-for-hackers-part-1-introduction-android.1280x600.jpg",
    link: "/payload",
  },
  {
    heading: "Ducky",
    para: "The USB Rubber Ducky is a specialized USB device developed by Hak5 for penetration testing and ethical hacking purposes. It is designed to emulate a Human Interface Device (HID), specifically a USB keyboard. While appearing as a standard USB flash drive, the Rubber Ducky functions as a keystroke injection tool, allowing users to send pre-programmed keystrokes to a target computer.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsGn_fhJRb5W8ZGizfCdcFI8iy3gz5gYhElQ&usqp=CAU",
    link: "/duckey",
  },
];
export default function ScriptMenu() {
  window.scrollTo(0, 0);
  return (
    <>
      <div className="bg-gradient-to-r from-black to-[#003706]">
        <div className="relative mx-auto max-w-7xl text-white py-28 flex flex-col justify-center items-center gap-5 lg:py-32 lg:gap-10">
          <Navbar></Navbar>
          <h1 className="font-juli text-3xl md:text-5xl">Choose attack</h1>
          <div className="space-y-5 sm:space-y-0 px-5 xl:px-0 sm:grid grid-cols-2 gap-5">
            {arr.map((v, i) => {
              return (
                <div
                  key={i}
                  className="lg:flex gap-5 rounded-md overflow-hidden bg-[#ffffff20]"
                >
                  <div className="h-52 w-full lg:min-w-[18rem] lg:max-w-[18rem]">
                    <img
                      src={v.img}
                      alt=""
                      className={`h-full w-full object-cover object-${v.position}`}
                    />
                  </div>
                  <div className="space-y-8 lg:space-y-0 p-5 lg:px-0 md:py-5 flex flex-col justify-between">
                    <div className="space-y-1">
                      <h1 className="text-lg font-semibold">{v.heading}</h1>
                      <p className="line-clamp-3">{v.para}</p>
                    </div>
                    <div>
                      <div>
                        <Link
                          to={v.link}
                          className="bg-cyan-200 rounded-md py-1 text-black px-2 mr-2"
                        >
                          script
                        </Link>
                        <Link
                          to={`/safe${v.link}`}
                          className="bg-cyan-200 rounded-md py-1 text-black px-2 mr-2"
                        >
                          safety
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
