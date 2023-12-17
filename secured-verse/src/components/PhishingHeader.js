import React from "react";
import FishingLogo from "../assets/phishing.png";
import Logo from "../assets/Logo.png";
import Step1 from "../assets/step1.png";
import Step2 from "../assets/step2.png";
import Step3 from "../assets/step3.png";
import Step4 from "../assets/step4.png";
import Step5 from "../assets/step5.png";

export default function PhishingHeader() {
  return (
    <>
      <div className="">
        <div className="mx-auto max-w-7xl ">
          {/* Gradient Div */}
          <div className="relative bg-gradient-to-r from-black to-[#003706] text-white flex flex-col justify-center items-center h-[95vh] lg:h-screen lg:shadow-2xl shadow-black gap-7 px-5 lg:pt-28 py-10 lg:mb-10 lg:px-48 ">
            <ul className="absolute top-0 flex gap-5 w-full justify-end items-center px-3 md:px-10 py-4 md:py-5">
              <li className="mr-auto flex items-center gap-2">
                <img src={Logo} alt="logo" className="w-9 md:w-12" />
                <p className="md:text-3xl font-juli">SECUREDVERSE</p>
              </li>
              <li className="md:text-xl hidden md:block font-jura">HOME</li>
              <li className="md:text-xl hidden md:block font-jura">
                PHISH CATHER
              </li>
              <li className="md:text-xl hidden md:block font-jura">CONTACT</li>
              <li className="md:text-xl hidden md:block font-jura">ABOUTS</li>
              <li className="md:text-xl md:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                  />
                </svg>
              </li>
            </ul>
            <img src={FishingLogo} alt="fishing" className="w-40 sm:w-72" />
            <h1 className="font-bai text-3xl md:text-5xl">Phishing</h1>
            <p className="font-advent text-lg text-center text-[rgba(255,255,255,0.68)] md:text-2xl md:text-start">
              Phishing is like a trick played by cybercriminals. They pretend to
              be someone you trust, like a bank or a friend, and try to get your
              private information, such as passwords or credit card numbers.
              They do this using fake emails, messages, or websites that look
              real. It's important to be careful and not fall for these tricks
              to keep your information safe.
            </p>
          </div>
          
          {/* Disclaimer */}
          <div className="text-white space-y-5 px-2 my-10 lg:my-10 lg:px-48 ">
            <h1 className="font-handjet text-red-500 text-3xl md:text-5xl text-center">
              Disclaimer: Educational Purpose Only
            </h1>
            <p className="font-ibm text-red-500 text-sm font-semibold">
              The tools provided herein are intended solely for educational
              purposes. Users are reminded that any utilization of these tools
              in any other context, including but not limited to commercial,
              professional, or non-educational settings, is strictly prohibited.
              The creators and distributors of these tools do not endorse or
              encourage any misuse, unauthorized access, or any activities that
              violate applicable laws or regulations.
            </p>
          </div>

          {/* Step - 1 */}
          <div className="bg-gradient-to-r from-black to-[#003706] text-white flex flex-col justify-center lg:shadow-2xl shadow-black gap-5 px-2 sm:px-10 md:px-16 pt-10 lg:my-10 lg:px-48">
            <h1 className="font-bai text-3xl md:text-5xl">STEP - 1</h1>
            <h2 className="uppercase text-sm lg:text-2xl">
              To install the tool first go to the desktop directory and then
              install the tool using the following commands.
            </h2>
            <div className="border rounded border-gray-500">
              <div className="bg-gray-700 px-2 flex justify-between items-center py-1">
                terminal
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"
                  />
                </svg>
              </div>

              <p className="px-2 py-1">
                git clone https://github.com/htr-tech/zphisher.git
              </p>
            </div>
            <div className="border rounded border-gray-500">
              <div className="bg-gray-700 px-2 flex justify-between items-center py-1">
                terminal
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"
                  />
                </svg>
              </div>

              <p className="px-2 py-1">cd zphisher</p>
            </div>
            <img src={Step1} alt="terminal" className="my-5 lg:max-w-2xl" />
          </div>

          {/* Step - 2 */}
          <div className="bg-gradient-to-r from-black to-[#003706] text-white flex flex-col justify-center lg:shadow-2xl shadow-black gap-5 px-2  pt-10 lg:my-10 lg:px-48">
            <h1 className="font-bai text-3xl md:text-5xl">STEP - 2</h1>
            <h2 className="uppercase text-sm lg:text-2xl">
              Now you are in zphisher directory , use the following command to
              run the tool.
            </h2>
            <div className="border rounded border-gray-500">
              <div className="bg-gray-700 px-2 flex justify-between items-center py-1">
                terminal
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"
                  />
                </svg>
              </div>

              <p className="px-2 py-1">bash zphisher.sh</p>
            </div>

            <img src={Step2} alt="terminal" className="my-5 lg:max-w-2xl" />
          </div>

          {/* Step - 3 */}
          <div className="bg-gradient-to-r from-black to-[#003706] text-white flex flex-col justify-center lg:shadow-2xl shadow-black gap-5 px-2  pt-10 lg:my-10 lg:px-48">
            <h1 className="font-bai text-3xl md:text-5xl">STEP - 3</h1>
            <h2 className="uppercase text-sm lg:text-2xl">
              The tool has started running successfully. Now you have to choose
              the options from the tool for which you have to make the phishing
              page.
            </h2>
            <img src={Step3} alt="terminal" className="my-5 lg:max-w-2xl" />
          </div>

          {/* Step - 4 */}
          <div className="bg-gradient-to-r from-black to-[#003706] text-white flex flex-col justify-center lg:shadow-2xl shadow-black gap-5 px-2  pt-10 lg:my-10 lg:px-48">
            <h1 className="font-bai text-3xl md:text-5xl">STEP - 4</h1>
            <h2 className="uppercase text-sm lg:text-2xl">
              From these options, you can choose the number for which you have
              to create a phishing page. Suppose you want to create a phishing
              page for Instagram then choose option 2.{" "}
            </h2>
            <img src={Step4} alt="terminal" className="my-5 lg:max-w-2xl" />
          </div>

          {/* Step - 5 */}
          <div className="bg-gradient-to-r from-black to-[#003706] text-white flex flex-col justify-center lg:shadow-2xl shadow-black gap-5 px-2  pt-10 lg:my-10 lg:px-48">
            <h1 className="font-bai text-3xl md:text-5xl">STEP - 5</h1>
            <h2 className="uppercase text-sm lg:text-2xl">
              Now you can see that to attract the victim , it’s giving 4
              different web templates. You can choose any option from here.
              Suppose you want to choose the first option then type 1..
            </h2>
            <img src={Step5} alt="terminal" className="my-5 lg:max-w-2xl" />
          </div>
        </div>
      </div>
    </>
  );
}
