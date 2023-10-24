"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import generalData from "../data/generalData.json";

function AboutSection() {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();
  const dataSelected = generalData[tab];

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4l font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            LAram Le LAram Le LAram Le LAram Le LAram Le LAram Le LAram Le LAram
            Le LAram Le LAram Le LAram Le LAram Le LAram Le LAram Le LAram Le
            LAram Le LAram Le LAram Le LAram Le LAram Le LAram Le LAram Le LAram
            Le LAram Le LAram Le LAram Le LAram Le LAram Le LAram Le LAram Le
            LAram Le LAram Le
          </p>
          <div className="flex flex-row justify-start mt-8">
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
          </div>
          <div className="grid md:grid-cols-2 xl:grid-cols-5 gap-4 mt-6">
            {dataSelected.map((item, index) => (
              <button
                id={index}
                className="square px-3 py-2 text-xl md:text-md cursor-pointer bg-slate-800 hover:bg-slate-600 rounded-md"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
