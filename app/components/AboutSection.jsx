"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul>
                <li>Skill #1</li>
                <li>Skill #2</li>
                <li>Skill #3</li>
                <li>Skill #4</li>
                <li>Skill #5</li>
                <li>Skill #6</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul>
                <li>Education #1</li>
                <li>Education #2</li>
                <li>Education #3</li>
                <li>Education #4</li>
                <li>Education #5</li>
            </ul>
        )
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
            <ul>
                <li>Certificate #1</li>
                <li>Certificate #2</li>
                <li>Certificate #3</li>
                <li>Certificate #4</li>
            </ul>
        )
    }
]

function AboutSection() {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div>
          <h2 className="text-4l font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            LAram Le LAram Le LAram Le LAram Le LAram Le LAram Le LAram Le LAram
            Le LAram Le LAram Le LAram Le LAram Le LAram Le LAram Le LAram Le
            LAram Le LAram Le LAram Le LAram Le LAram Le LAram Le LAram Le LAram
            Le LAram Le LAram Le LAram Le LAram Le LAram Le LAram Le LAram Le
            LAram Le LAram Le
          </p>
          <div className="flex flex-row mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {""}
              Skills {""}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {""}
              Education {""}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {""}
              Certifications {""}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("projects")}
              active={tab === "projects"}
            >
              {""}
              Projects {""}
            </TabButton>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
