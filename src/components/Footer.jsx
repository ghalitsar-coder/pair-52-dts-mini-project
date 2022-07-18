import React from "react";

const Footer = () => {
  const left = [
    "Audio and Subtitles",
    "Media Center",
    "Security",
    "Contact Us",
  ];
  const leftM = ["Audio Description", "Investor Relations", "Legal Provisions"];
  const rightM = ["Help Center", "Jobs", "Cookie Preferences "];
  const right = ["Gift Cards", "Terms of Use", "Corporate Information "];
  return (
    <div className="h-[20vh] mt-20 text-sm text-grayMovie mb-10 grid place-items-center">
      <div className="container grid place-items-center grid-cols-2 lg:grid-cols-4 gap-5 ">
        <ul>
          {left.map((item) => (
            <li key={item} className="cursor-pointer"> {item}</li>
          ))}
        </ul>
        <ul>
          {leftM.map((item) => (
            <li key={item} className="cursor-pointer"> {item}</li>
          ))}
        </ul>
        <ul>
          {rightM.map((item) => (
            <li key={item} className="cursor-pointer"> {item}</li>
          ))}
        </ul>
        <ul>
          {right.map((item) => (
            <li key={item} className="cursor-pointer"> {item}</li>
          ))}
        </ul>
        <button className="px-3 py-2 border -ml-4 border-grayMovie">
          Service Code
        </button>
      </div>
      <span className="my-10 pb-10">
        &copy;2022 Movies,{" "}
        <a href="https://ghalitsardev.netlify.app/" className="text-redMovie">
          {" "}
          Ghalitsar{" "}
        </a>{" "}
        All Rights Reserved{" "}
      </span>
      {/* <div className="container">
        <button className="px-2 py-1 border border-grayMovie">
          Service Code
        </button>
      </div> */}
    </div>
  );
};

export default Footer;
