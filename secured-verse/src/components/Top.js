import React from "react";

export default function Top() {
  return (
    <div
      onClick={() => window.scroll(0, 0)}
      className="fixed right-0 bottom-0 z-50 font-bold cursor-pointer flex justify-center items-center text-[#00FFFF] p-1 m-4 md:m-5 md:p-3 bg-[#00ffff49] rounded-full"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        dataSlot="icon"
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m4.5 18.75 7.5-7.5 7.5 7.5"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m4.5 12.75 7.5-7.5 7.5 7.5"
        />
      </svg>
    </div>
  );
}
