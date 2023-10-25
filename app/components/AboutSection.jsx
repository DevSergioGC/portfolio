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
      <h2 className="text-center text-4xl font-bold text-white mt-8 mb-8 md:mb-12">
        Title
      </h2>
      <div className="flex flex-row justify-center mt-8 text-2xl">
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
      <div className="grid md:grid-cols-2 xl:grid-cols-5 gap-4 mt-6 mb-8">
        {dataSelected.map((item, index) => (
          <button
            id={index}
            className="square px-3 py-2 text-xl md:text-md cursor-pointer bg-slate-800 hover:bg-slate-600 rounded-md"
          >
            {item.name}
          </button>
        ))}
      </div>
    </section>
  );
}

export default AboutSection;
