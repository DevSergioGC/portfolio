import React from "react";
import Link from "next/link";
import GithubIcon from "./icons/GithubIcon";
import LinkedInIcon from "./icons/LinkedInIcon";

const SocialIcons = () => {
  return (
    <div className="socials flex flex-row gap-4">
      <Link href="github.com">
        <GithubIcon />
      </Link>
      <Link href="linkedin.com">
        <LinkedInIcon />
      </Link>
    </div>
  );
};

export default SocialIcons;
