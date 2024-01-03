import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Abhishekh from "../teamPhotos/abhishek.jpg";
import Shadab from "../teamPhotos/bablu.jpg";
import Raza from "../teamPhotos/raza.jpg";
import Rizwan from "../teamPhotos/rizwan.jpg";
import Zaid from "../teamPhotos/zaid.jpg";
import Yash from "../teamPhotos/yash.jpg";
import Sibananda from "../teamPhotos/siba.png";
import Nathan from "../teamPhotos/nathan.jpg";
import Rajkishore from "../teamPhotos/raj.jpg";
import Ryan from "../teamPhotos/ryan.jpg";
import Vignesh from "../teamPhotos/vignesh.jpg";
// import Tabish from "../teamPhotos/";
import Pranjali from "../teamPhotos/pranjali.jpg";
import Misbah from "../teamPhotos/misba.jpg";
import Sneha from "../teamPhotos/sneha.jpg";
import Sneha2 from "../teamPhotos/senha2.jpg";
import Manasi from "../teamPhotos/mansi.jpg";

const teamData = [
  {
    dept: "Anchors",
    members: [
      {
        img: Zaid,
        name: "Zaid",
      },
      {
        img: Misbah,
        name: "Misbah",
      },
    ],
  },
  {
    dept: "Presentors",
    members: [
      {
        img: Nathan,
        name: "Nathan",
      },
      {
        img: Sneha,
        name: "Sneha",
      },
    ],
  },
  {
    dept: "Demonstartors",
    members: [
      {
        img: Abhishekh,
        name: "Abhishekh ",
      },
      {
        img: Rizwan,
        name: "Rizwan",
      },
    ],
  },
  {
    dept: "Developers",
    members: [
      {
        img: Sibananda,
        name: "Sibananda",
      },
      {
        img: Yash,
        name: "Yash",
      },
      {
        img: Raza,
        name: "Raza",
      },
    ],
  },
  {
    dept: "Digital Creation and Camera",
    members: [
      {
        img: Rajkishore,
        name: "Rajkishore",
      },
      {
        img: Ryan,
        name: "Ryan",
      },
      {
        img: Vignesh,
        name: "Vignesh",
      },
    ],
  },
  {
    dept: "Public Relation",
    members: [
      {
        img: Sneha,
        name: "Sneha",
      },
      {
        img: Pranjali,
        name: "Pranjali",
      },
    ],
  },
  {
    dept: "PPT Creation",
    members: [
      {
        img: Zaid,
        name: "Zaid",
      },
      {
        img: Manasi,
        name: "Mansi",
      },
    ],
  },
  {
    dept: "Hacker",
    members: [
      {
        img: Shadab,
        name: "Shadab",
      },
    ],
  },
  {
    dept: "Decoration",
    members: [
      {
        img: Manasi,
        name: "Mansi",
      },
    ],
  },
];
export default function About() {
  window.scroll(0, 0);
  return (
    <>
      <div className="bg-gradient-to-r from-black to-[#003706] text-white">
        <div className="relative max-w-7xl mx-auto pb-32">
          <Navbar></Navbar>

          <div className="max-w-5xl mx-auto pt-20 px-5 sm:px-32 md:px-6 lg:px-0">
            {teamData.map((value) => {
              return (
                <div className="container mx-auto">
                  <h1 className="text-4xl font-semibold text-center py-7">
                    {value.dept}
                  </h1>
                  <div className="flex flex-wrap justify-center gap-10 lg:gap-8 mb-20">
                    {value.members.map((data) => {
                      return (
                        <div className="rounded-lg bg-[#ffffff32] shadow-2xl shadow-[#ffffff3d] overflow-hidden">
                          <img
                            src={data.img}
                            alt="Team Member 1"
                            className="w-72 h-72 object-cover hover:scale-105 duration-500"
                          />
                          <div className="p-6">
                            <h2 className="text-xl font-semibold mb-2">
                              {data.name}
                            </h2>
                            <p className="text-gray-100">
                              Co-founder &amp; CEO
                            </p>
                          </div>
                        </div>
                      );
                    })}
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
