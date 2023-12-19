import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const arr = [
  {
    heading: "Phinsing",
    para: "Phishing is a fraudulent communication that appears to come from a legitimate source, such as email or text messages.",
    img: "https://vipre.com/wp-content/uploads/2022/11/spear-phishing.jpeg",
    link:"/phishing"
  },
  {
    heading: "DDos",
    para: "Phishing is a fraudulent communication that appears to come from a legitimate source, such as email or text messages.",
    img: "https://www.rcrwireless.com/wp-content/uploads/2022/12/182638386_s-696x385.jpg",
    position:"left",
    link:"/ddos"
  },
  {
    heading: "Reverse Shell",
    para: "Phishing is a fraudulent communication that appears to come from a legitimate source, such as email or text messages.",
    img: "https://www.inkyvoxel.com/content/images/size/w2000/2023/01/reverse-and-bind-shells.png",
    link:"/reverseshell"

  },
  {
    heading: "Network Scanning",
    para: "Phishing is a fraudulent communication that appears to come from a legitimate source, such as email or text messages.",
    img: "https://www.insecure.in/images/article/scanning.webp",
    position:"left",
    link:"/networkscan"
  },
  {
    heading: "Android Payload",
    para: "Phishing is a fraudulent communication that appears to come from a legitimate source, such as email or text messages.",
    img: "https://img.wonderhowto.com/img/80/81/63585942246015/0/sploit-building-android-applications-for-hackers-part-1-introduction-android.1280x600.jpg",
  },
  {
    heading: "Duckey",
    para: "Phishing is a fraudulent communication that appears to come from a legitimate source, such as email or text messages.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsGn_fhJRb5W8ZGizfCdcFI8iy3gz5gYhElQ&usqp=CAU",
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
          <div className="space-y-5 sm:space-y-0 px-2 xl:px-0 sm:grid grid-cols-2 gap-5">
            {arr.map((v) => {
              return (
                <div className="lg:flex gap-5 rounded-md overflow-hidden bg-[#ffffff20]">
                  <div className="h-52 w-full lg:w-[45rem]">
                    <img
                      src={v.img}
                      alt=""
                      className={`h-full w-full object-cover object-${v.position}`}
                    />
                  </div>
                  <div className="space-y-8 lg:space-y-0 p-2 lg:px-0 md:py-5 flex flex-col justify-between">
                    <div className="space-y-1">
                      <h1 className="text-lg font-semibold">{v.heading}</h1>
                      <p>
                        {v.para}
                      </p>
                    </div>
                    <div>
                      <div>
                        <Link to={v.link} className="bg-cyan-200 rounded-md py-1 text-black px-2 mr-2">
                          script
                        </Link>
                        <button className="bg-cyan-200 rounded-md py-1 text-black px-2 mr-2">
                          safety
                        </button>
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

const test = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-black to-[#003706] relative text-white">
        <Navbar></Navbar>
        <dir className="max-w-7xl mx-auto ">
          <div className="grid grid-cols-2 gap-">
            {arr.map((v) => {
              return (
                <div className="flex rounded-md overflow-hidden">
                  <img
                    src="https://vipre.com/wp-content/uploads/2022/11/spear-phishing.jpeg"
                    alt=""
                    className="h-52"
                  />
                  <div className="bg-red-20">
                    <h1>Phishing</h1>
                    <p>
                      Phishing is a fraudulent communication that appears to
                      come from a legitimate source, such as email or text
                      messages. The goal of phishing is to steal money, gain
                      access to sensitive data, or install malware on the
                      victim's device.
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </dir>
      </div>
      {/* <Footer></Footer> */}
    </>
  );
};
