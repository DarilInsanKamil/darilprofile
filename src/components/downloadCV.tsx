import React from "react";

export const GetResumeComponent = () => {
  return (
    <div className="border border-gray-500 px-3 py-1 rounded-full w-fit transition-all hover:bg-gray-100 bg-white">
      <a href="/resume"
      target="_blank"
      className="flex gap-2 items-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-download-icon lucide-download"
        >
          <path d="M12 15V3" />
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <path d="m7 10 5 5 5-5" />
        </svg>
        Resume
      </a>
    </div>
  );
};
