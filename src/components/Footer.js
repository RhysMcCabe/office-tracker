import React from "react";
import GitHubSVG from "../images/GitHubSVG";

function Footer() {
  return (
    <a
      href="https://github.com/RhysMcCabe/office-tracker"
      target="_blank"
      className="flex justify-center gap-4 mt-12 px-6 border-b border-t border-violet-400 w-fit mx-auto cursor-pointer hover:bg-violet-400 hover:text-black font-semibold"
    >
      <div className="text-sm py-4">View code</div>
      <div className="py-4">
        <GitHubSVG className={"w-5 h-5"} />
      </div>
    </a>
  );
}

export default Footer;
