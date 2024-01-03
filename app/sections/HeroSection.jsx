"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import DropdownButton from "../components/DropdownButton";
import SocialIcons from "../components/SocialIcons";

function HeroSection() {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opcity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-7 place-self-center text-center sm:text-left"
        >
          <h1 className="dark:text-dark-titles text-light-titles mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r dark:from-dark-transition1 dark:via-dark-transition2 dark:to-dark-transition3 from-light-transition1 via-light-transition2 to-light-transition3">
              Hello, I&apos;m {""}
            </span>
            <br />
            <TypeAnimation
              sequence={["Sergio!", 2500, "Backend Developer", 2500]}
              wrapper="span"
              speed={50}
              repeat={0}
            />
          </h1>
          <p className="text-light-paragraphs dark:text-dark-paragraphs text-base sm:text-lg mb-6 lg:text-xl">
            I&apos;m Sergio, a Backend Developer with a passion for learning and
            creating new things. I&apos;m currently looking for a new
            opportunity to grow and learn. I&apos;m a hard worker and a team
            player. I&apos;m always looking for ways to improve my skills and
            learn new ones.
          </p>
          <div className="mb-7 sm:text-center">
            <SocialIcons />
          </div>
          <div>
            <DropdownButton
              title="Download CV"
              items={["ES", "EN"]}
              className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-light-transition1 via-light-transition2 to-light-transition3 dark:from-dark-transition1 dark:via-dark-transition2 dark:to-dark-transition3 text-white"
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ opcity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-5 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-light-shadow-box dark:bg-dark-shadow-box w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/hero-image.png"
              alt="Hero Image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full"
              width={500}
              height={500}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
