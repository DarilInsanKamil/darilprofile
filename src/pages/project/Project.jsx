import React from "react";
import { CardProject } from "../../components/cardProject";

const Project = () => {
  return (
    <div className="p-6">
      <div className="mb-5">
        <a className="text-gray-400" href="/">{"<"} Back</a>
        <h1 className="font-bold text-2xl mt-5">Project</h1>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
        <CardProject />
      </div>
    </div>
  );
};

export default Project;
