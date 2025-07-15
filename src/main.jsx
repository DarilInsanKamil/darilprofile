import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blog from "./pages/blogs/Blog.jsx";
import BlogDetail from "./pages/blogs/[blogId].js";
import Project from "./pages/project/Project.jsx";
import Resume from "./pages/Resume.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />

        <Route path="blogs">
          <Route index element={<Blog />} />
          <Route path=":blogId" element={<BlogDetail />} />
        </Route>

        <Route path="projects">
          <Route index element={<Project />} />
        </Route>
        <Route path="/resume" element={<Resume />} />
   
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
