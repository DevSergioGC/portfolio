"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import generalData from "../data/generalData.json";
import IconSquare from "./IconSquare";

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
    <section className="text-white" id="about">
      <h2 className="text-center text-4xl font-bold text-white mt-8 mb-8 md:mb-12">
        Title
      </h2>
      <div className="flex flex-row justify-center mt-8 text-2xl">
        <TabButton
          selectTab={() => handleTabChange("skills")}
          active={tab === "skills"}
        >
          Skills
        </TabButton>
        <TabButton
          selectTab={() => handleTabChange("education")}
          active={tab === "education"}
        >
          Education
        </TabButton>
        <TabButton
          selectTab={() => handleTabChange("certification")}
          active={tab === "certification"}
        >
          Certifications
        </TabButton>
      </div>
      <div className="flex flex-col items-center justify-center p-10 mt-6 mb-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {dataSelected.map((item, index) => (
            <IconSquare name={item.name} key={index} tab={tab} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
