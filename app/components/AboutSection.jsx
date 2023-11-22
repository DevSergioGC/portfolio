"use client";
import React, { useTransition, useState } from "react";
import TabButton from "./TabButton";
import generalData from "../data/generalData.json";

import IconSquare from "./IconSquare";

function AboutSection() {
  const tabsData = Object.keys(generalData).slice(0, 3);
  const [tab, setTab] = useState(tabsData[0]);
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
        About Me
      </h2>
      <div className="flex flex-row justify-center mt-8 text-2xl">
        {tabsData.map((tabName) => (
          <TabButton
            selectTab={() => handleTabChange(tabName)}
            active={tab === tabName}
            key={tabName}
          >
            {tabName.toUpperCase()}
          </TabButton>
        ))}
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
