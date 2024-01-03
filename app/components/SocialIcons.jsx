import React from "react";
import Link from "next/link";
import GithubIcon from "./icons/GithubIcon";
import LinkedInIcon from "./icons/LinkedInIcon";

const SocialIcons = () => {
  return (
    <div className="socials flex flex-row gap-4">
      <Link href="https://github.com/DevSergioGC" target="_blank">
        <GithubIcon />
      </Link>
      <Link href="https://linkedin.com/in/devsergiogc" target="_blank">
        <LinkedInIcon />
      </Link>
    </div>
  );
};

export default SocialIcons;
