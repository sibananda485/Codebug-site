import React, { useState } from "react";

// phishingChecker.js

function extractDomainAndSubdomain(url) {
  const parsedUrl = new URL(url);
  const domainParts = parsedUrl.hostname.split(".");
  const domain = domainParts[domainParts.length - 2];
  const subdomain = domainParts.slice(0, -2).join(".");
  return { domain, subdomain };
}

function isPhishing(originalSites, phishingUrl) {
  const { domain: phishingDomain, subdomain: phishingSubdomain } =
    extractDomainAndSubdomain(phishingUrl);

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

const phishingUrl = "https://example.com"; // Replace with the URL you want to check
const result = isPhishing(popularSites, phishingUrl);

export default function FishingChecker() {
  const [data, setData] = useState("");
  const [text, setText] = useState("");
  const handleChange = (e) => {
    setData(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const result = isPhishing(popularSites, data);
    if(result){
        setText("Phising Site")
    }
    else{
        setText("Not a Phising Site")
    }
  };
  return (
    <div className="w-fit mt-52 mx-auto">
      <form onSubmit={handleSubmit}>
        <h1>{text}</h1>
        <input
          value={data}
          onChange={(e) => handleChange(e)}
          type="text"
          className="border border-black"
        />
        <button value="Submit">Submit</button>
      </form>
    </div>
  );
}
