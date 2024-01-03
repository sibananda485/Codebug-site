import React from "react";
import Git from "../images/github-sign 1.png";
import Youtube from "../images/youtube.png";
import Insta from "../images/instagram.png";
import Email from "../images/email.png";
import {Link} from "react-router-dom"

export default function Footer() {
  window.scroll(0,0)
  return (
    <>
    <div className="w-[80%] p-5 relative -mb-10 lg:-mb-16 mt-10 bg-gradient-to-r from-neutral-950 to-emerald-900 rounded-[10px] shadow m-auto flex justify-evenly items-center flex-wrap">
            <a target="_blank" href="https://github.com/almighty-10">
              <img
                className="hover:scale-110 duration-500 w-8 md:w-16"
                src={Git}
              />
            </a>
            <a target="_blank" href="https://www.instagram.com/team.almightyverse/?igsh=MXJtMzJ4M3plZW51eA%3D%3D">
              <img
                className="hover:scale-110 duration-500 w-8 md:w-16"
                src={Insta}
              />
            </a>
            
            
            <a target="_blank" href="mailto:almightyverseteam@gmail.com">
              <img
                className="hover:scale-110 duration-500 w-8 md:w-16"
                src={Email}
              />
            </a>
            <a target="_blank" href="https://youtube.com/@AlmightyVerse?si=inqfw7BkapRC9Q8Z">
              <img
                className="hover:scale-110 duration-500 w-8 md:w-16"
                src={Youtube}
              />
            </a>
          </div>
      <div className="w-full pt-24 text-white h-fit bg-gradient-to-b from-red-950 to-black shadow">
        <div>
          
          <div className="flex justify-around font-['KoHo'] ">
            <div>
              <ul>
                <h1 className="text-3xl mb-4">Services</h1>
                <Link className="block" to="/scriptmenu">Ultimate Script</Link>
                <Link className="block" to="/phishingchecker">Phishing Catcher</Link>
                <Link className="block" to="/books">Free Books</Link>
                <Link className="block" to="/about">About Us</Link>
              </ul>
            </div>
            <div>
              <ul>
              <h1 className="text-3xl mb-4">Social</h1>
                <a target="_blank" className="block" href="https://github.com/almighty-10">Github</a>
                <a target="_blank" className="block" href="mailto:almightyverseteam@gmail.com">Mail</a>
                <a target="_blank" className="block" href="https://youtube.com/@AlmightyVerse?si=inqfw7BkapRC9Q8Z">Youtube</a>
                <a target="_blank" className="block" href="https://www.instagram.com/team.almightyverse/?igsh=MXJtMzJ4M3plZW51eA%3D%3D">Instagram</a>
                <Link to="/qr" className="block" href="https://youtube.com/@AlmightyVerse?si=inqfw7BkapRC9Q8Z">Share</Link>
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
