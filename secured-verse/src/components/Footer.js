import React from "react";
import Git from "../images/github-sign 1.png";

export default function Footer() {
  return (
    <>
      <div className="w-full text-white h-fit bg-gradient-to-b from-red-950 to-black shadow">
        <div>
          <div className="w-[80%] h-[151px] bg-gradient-to-r from-neutral-950 to-emerald-900 rounded-[10px] shadow m-auto mt-10 flex justify-evenly items-center flex-wrap">
            <a href="#">
              <img
                className="hover:scale-110 duration-500 md:w-[100px] md:h-[100px] w-[50px] h-[50px]"
                src={Git}
              />
            </a>
            <a href="#">
              <img
                className="hover:scale-110 duration-500 md:w-[100px] md:h-[100px] w-[50px] h-[50px]"
                src={Git}
              />
            </a>
            <a href="#">
              <img
                className="hover:scale-110 duration-500 md:w-[100px] md:h-[100px] w-[50px] h-[50px]"
                src={Git}
              />
            </a>
            <a href="#">
              <img
                className="hover:scale-110 duration-500 md:w-[100px] md:h-[100px] w-[50px] h-[50px]"
                src={Git}
              />
            </a>
          </div>
          <div className="flex justify-around mt-8 font-['KoHo']">
            <div>
              <ul>
                <h1 className="text-3xl">Services</h1>
                <li>Service1</li>
                <li>Service2</li>
                <li>service3</li>
                <li>Service4</li>
              </ul>
            </div>
            <div>
              <ul>
                <h1 className="text-3xl">Social</h1>
                <li>Service1</li>
                <li>Service2</li>
                <li>service3</li>
                <li>Service4</li>
              </ul>
            </div>
          </div>
          <div className="font-['KoHo'] mt-6 pb-6">
            <div className="text-center">© ALMIGHTY VERSE PVT | LTD</div>
          </div>
        </div>
      </div>
    </>
  );
}
