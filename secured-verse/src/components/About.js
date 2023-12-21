import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const arr = [1, 1,1];
// const data = [{
//     dept:""
// }]
export default function About() {
  window.scroll(0, 0);
  return (
    <>
      <div className="bg-gradient-to-r from-black to-[#003706] text-white">
        <div className="relative max-w-7xl mx-auto pb-32">
          <Navbar></Navbar>

          <div className="max-w-5xl mx-auto pt-20 px-5 sm:px-32 md:px-6 lg:px-0">
            {arr.map(()=>{
                return (
                    <div className="container mx-auto">
                    <h1 className="text-4xl font-semibold text-center py-7">
                      Developer
                    </h1>
                    <div className="flex flex-wrap justify-center gap-10 lg:gap-8 mb-20">
                      {arr.map(() => {
                        return (
                          <div className="rounded-lg bg-[#ffffff32] shadow-2xl shadow-[#ffffff3d] overflow-hidden">
                            <img
                              src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"
                              alt="Team Member 1"
                              className="w-[20rem] h-52 object-cover hover:scale-105 duration-500"
                            />
                            <div className="p-6">
                              <h2 className="text-xl font-semibold mb-2">John Doe</h2>
                              <p className="text-gray-100">Co-founder &amp; CEO</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )
            })}
            
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
