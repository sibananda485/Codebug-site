import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
// phishingChecker.js

function extractDomainAndSubdomain(url) {
  try {
    const parsedUrl = new URL(url);
    const domainParts = parsedUrl.hostname.split(".");
    const domain = domainParts[domainParts.length - 2];
    const subdomain = domainParts.slice(0, -2).join(".");
    return { domain, subdomain };
  } catch (error) {
    console.error(`Invalid URL: ${url}`);
    return null;
  }
}

function isPhishing(originalSites, phishingUrl) {
  const extractedInfo = extractDomainAndSubdomain(phishingUrl);
  if (!extractedInfo) {
    return false; // Treat invalid URL as not phishing
  }

  const { domain: phishingDomain, subdomain: phishingSubdomain } =
    extractedInfo;

  for (const originalUrl of originalSites) {
    const { domain: originalDomain, subdomain: originalSubdomain } =
      extractDomainAndSubdomain(originalUrl);
    if (
      originalDomain === phishingDomain &&
      originalSubdomain === phishingSubdomain
    ) {
      return false; // Not phishing if a match is found
    }
  }

  return true; // Phishing if no match is found
}

// Example usage:
const popularSites = [
  "https://www.google.com",
  "https://www.facebook.com/",
  "https://www.youtube.com/",
  "https://www.whatsapp.com/",
  "https://www.messenger.com/",
  "https://www.instagram.com/",
  "https://www.tiktok.com/",
  "https://www.wechat.com/",
  "https://qzone.qq.com/",
  "https://www.weibo.com/",
  "https://www.reddit.com/",
  "https://twitter.com/",
  "https://telegram.org/",
  "https://www.linkedin.com/",
  "https://www.snapchat.com/",
  "https://www.pinterest.com/",
  "https://www.tumblr.com/",
  "https://medium.com/",
  "https://www.tiktok.com/en/",
  "http://tieba.baidu.com/",
  "https://www.twitch.tv/",
  "https://vk.com/",
  "https://line.me/",
  "https://www.yy.com/",
  "https://discord.com/",
  "https://www.douban.com/",
  "https://www.quora.com/",
  "https://www.meetup.com/",
  "https://www.flickr.com/",
  "https://mix.com/",
  "https://myspace.com/",
  "https://v.qq.com/",
  "http://www.renren.com/",
  "https://www.yelp.com/",
  "https://www.xing.com/",
  "https://soundcloud.com/",
  "https://www.tripadvisor.com/",
  "https://www.reverbnation.com/",
  "https://foursquare.com/",
  "https://www.friendster.com/",
  "https://www.gaiaonline.com/",
  "https://www.nexopia.com/",
  "https://www.xanga.com/",
  "https://weheartit.com/",
  "https://www.classmates.com/",
  "https://www.cafemom.com/",
  "http://www.buzznet.com/",
  "https://www.ravelry.com/",
  "https://www.livejournal.com/",
  "https://www.myheritage.com/",
  "https://www.care2.com/",
];

export default function FishingChecker() {
  window.scroll(0, 0);
  const [data, setData] = useState("");
  const [result, setResult] = useState(false);
  const [display, setDisplay] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const handleChange = (e) => {
    setData(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setDisplay(false);
    if (extractDomainAndSubdomain(data)) {
      setTimeout(() => {
        const result = isPhishing(popularSites, data);
        if (result) {
          setDisplay(true);
          setResult(true);
        } else {
          setDisplay(true);
          setResult(false);
        }
        setLoading(false);
      }, 500);
    } else {
      setTimeout(() => {
        setLoading(false);
        setError(true);
      }, 500);
    }
  };
  return (
    <>
      <div className="bg-gradient-to-r from-black to-[#003706]">
        <div className="relative mx-auto max-w-7xl flex flex-col gap-10 text-white py-32 md:py-40 md:gap-24 h-screen">
          <Navbar></Navbar>
          <h1 className="font-juli text-center text-3xl md:text-5xl">
            Phishing checker
          </h1>
          <form className="text-center">
            <input
              placeholder="Enter URL"
              type="text"
              onChange={handleChange}
              value={data}
              className="px-1 py-2 w-1/2 rounded-s-md text-black md:text-2xl outline-none"
            />
            <button
              className="px-5 py-2 bg-cyan-500 rounded-e-md hover:bg-cyan-600 md:text-2xl transition-all"
              onClick={handleSubmit}
            >
              Check
            </button>
          </form>
          {loading && (
            <p className="text-center text-xl md:text-3xl">Checking....</p>
          )}
          {display ? (
            result ? (
              <div className="flex gap-1 items-center text-center text-base md:text-xl bg-red-500 w-fit mx-auto px-5 md:px-10 py-1 md:py-2 rounded-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  dataSlot="icon"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
                  />
                </svg>
                <p>Phishing Site</p>
              </div>
            ) : (
              <div className="flex gap-1 items-center text-center text-base md:text-xl bg-green-500 w-fit mx-auto px-5 md:px-10 py-1 md:py-2 rounded-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  dataSlot="icon"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                  />
                </svg>

                <p>Not Phishing Site</p>
              </div>
            )
          ) : null}
          {error && (
            <div className="flex gap-1 items-center text-center text-base md:text-xl bg-yellow-500 w-fit mx-auto px-5 md:px-10 py-1 md:py-2 rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                dataSlot="icon"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
                />
              </svg>
              <p>Enter a valid URL</p>
            </div>
          )}
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
