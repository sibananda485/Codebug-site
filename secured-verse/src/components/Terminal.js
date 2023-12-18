import React from 'react'

export default function Terminal({text}) {
    const handleCopy = (e) => {
        navigator.clipboard.writeText(
          e.target.parentElement.parentElement.nextElementSibling.innerText
        );
        e.target.previousSibling.classList.remove("hidden");
        setTimeout(() => {
          e.target.previousSibling.classList.add("hidden");
        }, 2000);
      };
  return (
    <div>           <div className="border rounded border-gray-500">
    <div className="bg-black px-2 flex justify-between items-center py-1">
      terminal
      <div className="flex items-center gap-1">
        <p className="hidden border border-cyan-500 text-cyan-500 px-2 rounded-md">
          Copied
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-5 h-5 cursor-pointer hover:text-cyan-400 transition-all"
          onClick={handleCopy}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"
          />
        </svg>
      </div>
    </div>

    <p className="px-2 py-1 font-ibm">
    {text}
    </p>
  </div></div>
  )
}
