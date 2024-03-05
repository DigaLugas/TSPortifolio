import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          link="https://www.github.com/DigaLugas"
          src="/PerceptronGraphZika.png"
          title="Linear Perceptron"
          description="An implementation of a Linear Perceptron model using PyTorch, capable of binary classification tasks."
        />

        <ProjectCard
          link="https://www.github.com/DigaLugas"
          src="/PersonalSite.png"
          title="My Own Personal Site"
          description="My personal website, developed for a school project using HTML5, CSS, and JQuery."
        />
        <ProjectCard
          link="https://www.github.com/DigaLugas"
          src="/LibraryAPI.png"
          title="NoSQL Library API"
          description="A Node.js and Express.js API for a library, using MongoDB as a NoSQL database, with JsonWebToken for validation."
        />
      </div>
    </div>
  );
};

export default Projects;