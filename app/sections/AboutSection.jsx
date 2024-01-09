"use client";
import React, { useTransition, useState } from "react";
import TabButton from "../components/TabButton";
import generalData from "../data/generalData.json";
import IconSquare from "../components/IconSquare";
import TimeLine from "../components/TimeLine";
import Table from "../components/Table";
import { useTranslation } from "react-i18next";

function AboutSection() {
  // const { t } = useTranslation();
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
    <section className="dark:text-white text-light-titles" id="about">
      <h2 className="text-center text-4xl font-bold mt-8 mb-8 md:mb-12">
        {/* {t('aboutSection')} */}
      </h2>
      <div className="flex flex-row justify-center mt-8 text-lg">
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
        {tab === "skills" && <IconSquare data={dataSelected} />}
        {tab === "education" && <TimeLine data={dataSelected} />}
        {tab === "certifications" && <Table data={dataSelected} />}
      </div>
    </section>
  );
}

export default AboutSection;
