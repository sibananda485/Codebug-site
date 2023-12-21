import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import b1 from "../images/b1.jpg";
import b2 from "../images/b2.jpg";
import b3 from "../images/b3.png";
import b4 from "../images/b4.png";
import b5 from "../images/b5.png";
import b6 from "../images/b6.png";
import b7 from "../images/b7.png";
import b8 from "../images/b8.png";
import b9 from "../images/b9.png";
import b10 from "../images/b10.png";
import d1 from "./books/Beginning-Ethical-Hacking-with-Kali-Linux-by-Sanjib-Sinha-booksfree.org_.pdf";
import d2 from "./books/The-Basics-of-Hacking-and-Penetration-Testing-Second-Edition-by-Patrick-E-booksfree.org_.pdf";
import d3 from "./books/Web-Hacking-101-by-Peter-Yaworski-booksfree.org_.pdf";
import d4 from "./books/Gray-Hat-Hacking-The-Ethical-Hackers-Handbook-Second-Edition-booksfree.org_.pdf";
import d5 from "./books/Gray-Hat-Hacking-The-Ethical-Hackers-Handbook-Third-Edition-booksfree.org_.pdf";
import d6 from "./books/Gray-Hat-Hacking-The-Ethical-Hackers-Handbook-Fourth-Edition-booksfree.org_.pdf";
import d7 from "./books/Gray-Hat-Hacking-The-Ethical-Hackers-Handbook-Fifth-Edition-booksfree.org_.pdf";
import d8 from "./books/Hacking-Computer-Hacking-Security-Testing-Penetration-Testing-and-Basic-Security-by-Gary-H-Erin-W_comp.pdf";
import d9 from "./books/The-Web-Application-Hackers-Handbook-2nd-Edition-by-Dafydd-and-Marcus-booksfree.org_.pdf";
import d10 from "./books/linux-basic-for-hacking.pdf";

const books = [
  {
    title: "Beginning Ethical Hacking with Kali Linux",
    img: b1,
    link: d1,
    order: "//www.amazon.in/Beginning-Ethical-Hacking-Kali-Linux/dp/1484238907",
  },
  {
    title: "The Basics of Hacking & Penetration Testing (Second Edition)",
    img: b2,
    link: d2,
    order:
      "https://www.amazon.in/Basics-Hacking-Penetration-Testing-Ethical/dp/0124116442",
  },
  {
    title: "Web Hacking 101",
    img: b3,
    link: d3,
  },
  {
    title: "Gray Hat Hacking (Second Edition)",
    img: b4,
    link: d4,
    order:
      "https://www.amazon.in/Gray-Hat-Hacking-Second-Handbook/dp/0071495681",
  },
  {
    title: "Gray Hat Hacking (Third Edition)",
    img: b5,
    link: d5,
    order:
      "https://www.amazon.in/Gray-Hacking-Ethical-Hackers-Handbook/dp/0071742557",
  },
  {
    title: "Gray Hat Hacking (Fourth Edition)   ",
    img: b6,
    link: d6,
    order:
      "https://www.amazon.in/Hacking-Ethical-Hackers-Handbook-Fourth/dp/0071832386",
  },
  {
    title: "Gray Hat Hacking (Fifth Edition)",
    img: b7,
    link: d7,
    order:
      "https://www.amazon.in/GRAY-HACKING-ETHICAL-HACKERS-HANDBK/dp/1260108414",
  },
  {
    title:
      "Hacking- Computer Hacking SecurityTesting Penetration Testing and Basic Security",
    img: b8,
    link: d8,
    order:
      "https://www.amazon.in/Hacking-Computer-Security-Testing-Penetration-ebook/dp/B01N1UPX8D'",
  },
  {
    title: "The Web Application Hacker's Handbook (Second Edition)",
    img: b9,
    link: d9,
    order:
      "https://www.amazon.in/Web-Application-Hackers-Handbook-Exploiting-ebook/dp/B005LVQA9S",
  },
  {
    title: "Linux Basics For Hackers",
    img: b10,
    link: d10,
    order:
      "https://www.amazon.in/Linux-Basics-Hackers-Networking-Scripting/dp/1593278551",
  },
];

export default function Books() {
  window.scroll(0, 0);
  return (
    <>
      <div className="bg-gradient-to-r from-black to-green-800 text-white">
        <div className="relative max-w-7xl mx-auto">
          <Navbar></Navbar>
        </div>
        <div className="flex justify-center pt-28">
          <hr className="w-96 h-1 bg-black mt-8 mr-2" />
          <h1 className="text-6xl text-white">Books</h1>
          <hr className="w-96 h-1 bg-black mt-8 ml-2" />
        </div>
        <div className="max-w-7xl px-3 space-y-5 lg:space-y-0 mx-auto py-10 gap-10 md:grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
          {books.map((data, i) => {
            return (
              <div className="border rounded-lg overflow-hidden border-white flex flex-col justify-between gap-5">
                <img
                  className="h-80 object-contain bg-black"
                  src={data.img}
                  alt=""
                />
                <h1 className="text-center text-xl font-semibold text-white px-3">
                  {data.title}
                </h1>
                <div className="lg:mx-auto flex flex-col lg:flex-row gap-6 p-5">
                  <a
                    href={data.link}
                    download={data.link}
                    className="bg-green-500 text-white px-3 py-2 rounded-md text-center font-semibold"
                  >
                    Download E-book
                  </a> 
                  <a
                    className="bg-green-500 text-white px-3 py-2 rounded-md text-center font-semibold"
                    href="https://www.amazon.in/Beginning-Ethical-Hacking-Kali-Linux/dp/1484238907"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Buy Hard Copy
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
