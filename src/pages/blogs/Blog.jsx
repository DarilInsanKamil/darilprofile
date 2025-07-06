import React from "react";
import { Outlet } from "react-router-dom";

const Blog = () => {
  return (
    <div className="p-10">
      <h1>Work In Progress</h1>
      {/* will either be <Home/> or <Settings/> */}
      <Outlet />
    </div>
  );
};

export default Blog;
