"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
  {
    id: 1,
    title: "Project #1",
    description: "Description #1",
    imgUrl: "/images/projects/1.png",
    gitUrl: "https://github.com",
    previewUrl: "https://github.com/DevSergioGC",
    tag: ["All", "Web"],
  },
  {
    id: 2,
    title: "Project #2",
    description: "Description #2",
    imgUrl: "/images/projects/2.png",
    gitUrl: "https://github.com",
    previewUrl: "https://github.com/DevSergioGC",
    tag: ["All", "Web"],
  },
  {
    id: 3,
    title: "Project #3",
    description: "Description #3",
    imgUrl: "/images/projects/3.png",
    gitUrl: "https://github.com",
    previewUrl: "https://github.com/DevSergioGC",
    tag: ["All", "Web"],
  },
  {
    id: 4,
    title: "Project #4",
    description: "Description #4",
    imgUrl: "/images/projects/4.png",
    gitUrl: "https://github.com",
    previewUrl: "https://github.com/DevSergioGC",
    tag: ["All", "Mobile"],
  },
  {
    id: 5,
    title: "Project #5",
    description: "Description #5",
    imgUrl: "/images/projects/5.png",
    gitUrl: "https://github.com",
    previewUrl: "https://github.com/DevSergioGC",
    tag: ["All", "Mobile"],
  },
  {
    id: 6,
    title: "Project #6",
    description: "Description #6",
    imgUrl: "/images/projects/6.png",
    gitUrl: "https://github.com",
    previewUrl: "https://github.com/DevSergioGC",
    tag: ["All", "Mobile"],
  },
];

const ProjectSection = () => {
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  return (
    <>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.imgUrl}
            tags={project.tag}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectSection;
