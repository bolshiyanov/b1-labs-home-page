import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Benefit
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
      <ProjectCard
          src="/CardImage.png"
          title="For StartUp"
          description="Rapidly test numerous hypotheses, achieve exponential growth, and present your results to investors to secure a new round of investments gracefully."
        />
        <ProjectCard
          src="/NextWebsite.png"
          title="For BA & PM"
          description="Enhance your expertise, engage in mindful  work. Showcase all your accomplishments to SEO and confidently request a well-deserved salary increase."
        />
       
        <ProjectCard
          src="/SpaceWebsite.png"
          title="For enterprises"
          description="Uncover bottlenecks,  break through to overcome business inertia, and rejuvenate growth. As a young startup, your dynamism is the key to  success."
        />
      </div>
    </div>
  );
};

export default Projects;
