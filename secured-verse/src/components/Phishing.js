import React from "react";
import Navbar from "./Navbar";
import Terminal from "./Terminal";
import a1 from "../assets/phishing/phishing.png";
import a2 from "../assets/phishing/1.png";
import a3 from "../assets/phishing/2.png";
import a4 from "../assets/phishing/3.png";
import a5 from "../assets/phishing/4.png";
import a6 from "../assets/phishing/5.png";
import a7 from "../assets/phishing/6.png";
import a8 from "../assets/phishing/7.png";
import a9 from "../assets/phishing/8.png";
import Footer from "./Footer";

export default function PhishingHeader() {
  window.scrollTo(0, 0);
  return (
    <>
      {/* Intro Div */}
      <div className="bg-gradient-to-r from-black to-[#003706]">
        <div className="relative mx-auto max-w-7xl text-white py-28 flex flex-col justify-center items-center gap-5 lg:py-32 lg:gap-10">
          <Navbar></Navbar>
          <img src={a1} alt="fishing" className="w-40 lg:w-72" />
          <h1 className="font-juli text-3xl md:text-5xl">Phishing</h1>
          <p className="font-advent text-lg text-center text-[rgba(255,255,255,0.68)] px-2 md:text-2xl sm:px-10 xl:px-56 lg:text-start">
            Phishing is like a trick played by cybercriminals. They pretend to
            be someone you trust, like a bank or a friend, and try to get your
            private information, such as passwords or credit card numbers. They
            do this using fake emails, messages, or websites that look real.
            It's important to be careful and not fall for these tricks to keep
            your information safe.
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

        {/* Step - 1 */}
        <div className="bg-gradient-to-r from-black to-[#003706] text-white rounded-xl flex flex-col justify-center gap-5 md:gap-10 shadow-xl px-3 py-5 mb-5 mx-3 lg:mb-20 lg:py-16 lg:px-28">
          <h1 className="font-juli text-3xl md:text-5xl">STEP - 1</h1>
          <h2 className="uppercase font-juli text-sm lg:text-2xl">
            To install the tool first go to the desktop directory and then
            install the tool using the following commands.
          </h2>
          <Terminal text="git clone https://github.com/htr-tech/zphisher.git"></Terminal>
          <Terminal text="cd zphisher"></Terminal>

          <img src={a2} alt="terminal" className="my-5 md:max-w-2xl" />
        </div>

        {/* Step - 2 */}
        <div className="bg-gradient-to-r from-black to-[#003706] text-white rounded-xl flex flex-col justify-center gap-5 md:gap-10 shadow-xl px-3 py-5 mb-5 mx-3 lg:mb-20 lg:py-16 lg:px-28">
          <h1 className="font-juli text-3xl md:text-5xl">STEP - 2</h1>
          <h2 className="uppercase font-juli text-sm lg:text-2xl">
            Now you are in zphisher directory , use the following command to run
            the tool.
          </h2>
          <Terminal text="bash zphisher.sh"></Terminal>

          <img src={a3} alt="terminal" className="my-5 md:max-w-2xl" />
        </div>

        {/* Step - 3 */}
        <div className="bg-gradient-to-r from-black to-[#003706] text-white rounded-xl flex flex-col justify-center gap-5 md:gap-10 shadow-xl px-3 py-5 mb-5 mx-3 lg:mb-20 lg:py-16 lg:px-28">
          <h1 className="font-juli text-3xl md:text-5xl">STEP - 3</h1>
          <h2 className="uppercase font-juli text-sm lg:text-2xl">
            The tool has started running successfully. Now you have to choose
            the options from the tool for which you have to make the phishing
            page.
          </h2>
          <img src={a4} alt="terminal" className="my-5 md:max-w-2xl" />
        </div>

        {/* Step - 4 */}
        <div className="bg-gradient-to-r from-black to-[#003706] text-white rounded-xl flex flex-col justify-center gap-5 md:gap-10 shadow-xl px-3 py-5 mb-5 mx-3 lg:mb-20 lg:py-16 lg:px-28">
          <h1 className="font-juli text-3xl md:text-5xl">STEP - 4</h1>
          <h2 className="uppercase font-juli text-sm lg:text-2xl">
            From these options, you can choose the number for which you have to
            create a phishing page. Suppose you want to create a phishing page
            for Instagram then choose option 2.{" "}
          </h2>
          <img src={a5} alt="terminal" className="my-5 md:max-w-2xl" />
        </div>

        {/* Step - 5 */}
        <div className="bg-gradient-to-r from-black to-[#003706] text-white rounded-xl flex flex-col justify-center gap-5 md:gap-10 shadow-xl px-3 py-5 mb-5 mx-3 lg:mb-20 lg:py-16 lg:px-28">
          <h1 className="font-juli text-3xl md:text-5xl">STEP - 5</h1>
          <h2 className="uppercase font-juli text-sm lg:text-2xl">
            Now you can see that to attract the victim , it’s giving 4 different
            web templates. You can choose any option from here. Suppose you want
            to choose the first option then type 1..
          </h2>
          <img src={a6} alt="terminal" className="my-5 md:max-w-2xl" />
        </div>

        {/* Example */}
        <div className="bg-gradient-to-r from-black to-[#003706] text-white rounded-xl flex flex-col justify-center gap-5 md:gap-10 shadow-xl px-3 py-5 mb-5 mx-3 lg:mb-20 lg:py-16 lg:px-28">
          <h2 className="font-lec font-bold text-[#F2F603] text-sm lg:text-2xl">
            Example 1: Using Zphisher tool , create a phishing page of instagram
            and get credentials(user id and password ) of victim.
          </h2>
          <h2 className="font-lec font-bold text-[#0009ED] text-sm lg:text-2xl">
            After launching the tool you will see this interface.
          </h2>
          <img src={a7} alt="terminal" className="my-5 md:max-w-2xl" />
          <h2 className="font-lec font-bold text-[#00FF19] text-sm lg:text-2xl">
            You can send any of the links to the victim. Once he/she entered
            his/her id password it will get reflected in the terminal.
          </h2>
          <img src={a8} alt="alt" className="my-5 md:max-w-2xl" />
          <h2 className="font-lec font-bold text-[#B80000] text-sm lg:text-2xl">
            You can see the link we have opened is ezlikers. This is the
            phishing page we have opened. Now the user has to enter his/her id
            password
          </h2>
          <img src={a9} alt="alt" className="my-5 md:max-w-2xl" />
          <h2 className="font-lec font-bold text-sm lg:text-2xl">
            We got the details of ID and password here. This is how you can
            perform phishing using zphisher. You can send these links to the
            victim. Once the victim clicks on the link and types the id password
            it will be reflected on the terminal itself. This is how zphisher
            works. This is one of the best tools that can be used for phishing
            attacks. You can choose the option as per your requirement. zphisher
            is a powerful open-source tool Phishing Tool. It became very popular
            nowadays and is used to do phishing attacks . zphisher is easier
            than Social Engineering Toolkit
          </h2>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
