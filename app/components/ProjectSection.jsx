"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import generalData from "../data/generalData.json";
import { motion, useInView } from "framer-motion";

const projectsData = generalData.projects;
const tags = generalData.tags;

const ProjectSection = () => {
  const [tag, setTag] = useState(tags[0].name.toLowerCase());
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };
  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        {tags.map((tagData, index) => (
          <div key={index}>
            <ProjectTag
              key={index}
              onClick={handleTagChange}
              name={tagData.name.toLowerCase()}
              isSelected={tag.toLowerCase() === tagData.name.toLowerCase()}
            />
          </div>
        ))}
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.2, delay: index * 0.3 }}
          >
            <ProjectCard
              key={index}
              title={project.name}
              description={project.description}
              imgUrl={project.imgUrl}
              tags={project.tag}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectSection;
