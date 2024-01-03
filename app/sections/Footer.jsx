import React from "react";
import SocialIcons from "../components/SocialIcons";

const Footer = () => {
  return (
    <footer className="footer border border-t-light-shadow-box dark:border-t-dark-shadow-box border-l-transparent border-r-transparent">
      <div className="container p-12 flex justify-between">
        <span>LOGO</span>
        <SocialIcons />
        <p className="text-light-paragraphs dark:text-dark-paragraphs">All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
