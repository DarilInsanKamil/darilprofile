import React from "react";

const App = () => {
  return (
    <div className="md:px-[120px] md:py-[60px] p-[20px] md:grid grid-cols-2  gap-8 ">
      <section className="flex md:flex-row md:justify-start flex-col items-center gap-2 md:gap-8 col-span-2 ">
        <img
          src="/darilprofile.jpg"
          alt="darilphoto"
          className="w-[160px] h-[160px] object-cover rounded-sm"
        />
        <div className="text-center md:text-start">
          <h3 className="font-bold tracking-[-0.5px] text-[28px]">
            Daril Insan Kamil
          </h3>
          <p className="font-mono font-thin text-sm text-gray-600">
            Frontend Developer
          </p>
          <span className="flex gap-1 items-center text-xs mt-1 md:justify-start justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              className="text-gray-500"
            >
              <g
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              >
                <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0-18 0m.6-3h16.8M3.6 15h16.8" />
                <path d="M11.5 3a17 17 0 0 0 0 18m1-18a17 17 0 0 1 0 18" />
              </g>
            </svg>
            <p className="font-mono font-thin text-gray-600">
              Jakarta, Indonesia
            </p>
          </span>
          <div className="flex gap-2 mt-4 md:justify-start justify-center">
            <a
              href="mailto:darilinsankamil2132@gmail.com"
              target="_blank"
              className="group"
            >
              <div className="border border-gray-500 rounded-md w-max p-1 group-hover:bg-gray-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="text-gray-500 group-hover:text-gray-900"
                >
                  <path
                    fill="currentColor"
                    d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2zm-2 0l-8 5l-8-5zm0 12H4V8l8 5l8-5z"
                  />
                </svg>
              </div>
            </a>
            <a
              href="https://github.com/DarilInsanKamil"
              className="group"
              target="_blank"
            >
              <div className="border border-gray-500 rounded-md w-max p-1 group-hover:bg-gray-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="text-gray-500 group-hover:text-gray-900"
                >
                  <path
                    fill="currentColor"
                    d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
                  />
                </svg>
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/darilkamil/"
              className="group"
              target="_blank"
            >
              <div className="border border-gray-500 rounded-md w-max p-1 group-hover:bg-gray-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="text-gray-500 group-hover:text-gray-900"
                >
                  <path
                    fill="currentColor"
                    d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
                  />
                </svg>
              </div>
            </a>
            <a
              href="https://instagram.com/darilkamil"
              className="group"
              target="_blank"
            >
              <div className="border border-gray-500 rounded-md w-max p-1 group-hover:bg-gray-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="text-gray-500 group-hover:text-gray-900"
                >
                  <path
                    fill="currentColor"
                    d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"
                  />
                </svg>
              </div>
            </a>
          </div>
        </div>
      </section>

      <section className="mt-5 col-span-1">
        <section>
          <div>
            <h3 className="font-bold text-[20px] tracking-[-0.3px]">About</h3>
            <p className="font-mono font-thin text-sm text-gray-600 mt-1">
              Hello i'm Daril. I am interested in software development and also
              UI/UX.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-[20px] tracking-[-0.3px] mt-5">
              Education
            </h3>
            <div>
              <div className="flex justify-between items-center">
                <h4 className="font-medium text-[16px] tracking-[-0.3px] mt-2">
                  SMK Bina Insan Mandiri
                </h4>
                <p className="text-gray-600 text-sm tracking-[1px]">
                  2018 - 2021
                </p>
              </div>
              <p className="font-mono font-thin text-sm text-gray-600">
                Teknik Komputer Jaringan
              </p>
            </div>
            <div>
              <div className="flex justify-between items-center">
                <h4 className="font-medium text-[16px] tracking-[-0.3px] mt-1">
                  Universitas Pamulang
                </h4>
                <p className="text-gray-600 text-sm tracking-[1px]">
                  2018 - Present
                </p>
              </div>
              <p className="font-mono font-thin text-sm text-gray-600">
                Bachelor's Degree in Computer Science
              </p>
            </div>
          </div>
        </section>
        <div>
          <h3 className="font-bold text-[20px] tracking-[-0.3px] mt-5">
            Work Experience
          </h3>
          <div>
            <h4 className="font-medium text-[16px] tracking-[-0.3px] mt-1">
              Universitas Mercu Buana
            </h4>
            <div className="flex justify-between w-full">
              <p className="font-mono font-thin text-gray-700">Intern</p>
              <p className="text-gray-600 text-sm tracking-[1px]">
                Mar 2019 - Jul 2019
              </p>
            </div>
            <p className="font-mono font-thin text-sm text-gray-600 mt-3 md:w-[600px] w-full">
              Mercu Buana University is a private university is a private
              university under the Menara Bhakti Foundation located in Jakarta,
              Indonesia.
            </p>
            {/* <ul>
              <li>heloo</li>
              <li>heloo</li>
              <li>heloo</li>
              <li>heloo</li>
            </ul> */}
          </div>
        </div>
      </section>

      <section className="mt-5 ">
        <div>
          <h3 className="font-bold text-[20px] tracking-[-0.3px]">
            Tech Stack
          </h3>
          <div className="flex gap-1 items-center flex-wrap mt-1">
            <p className="font-mono font-thin text-sm text-gray-600">
              Programming Language:{" "}
            </p>
            <p className="bg-gray-700 text-xs font-mono text-white font-bold w-max px-[6px] tracking-[0.5px] leading-[24px] rounded-sm">
              Javascript
            </p>
            <p className="bg-gray-700 text-xs font-mono text-white font-bold w-max px-[6px] tracking-[0.5px] leading-[24px] rounded-sm">
              Typescript
            </p>
            <p className="bg-gray-700 text-xs font-mono text-white font-bold w-max px-[6px] tracking-[0.5px] leading-[24px] rounded-sm">
              Python
            </p>
          </div>
        </div>
        <div className="flex gap-1 mt-2 flex-wrap items-center">
          <p className="font-mono font-thin text-sm text-gray-600">ToolBox:</p>
          <p className="bg-gray-700 text-xs font-mono text-white w-max px-[6px] font-bold tracking-[0.5px] leading-[24px] rounded-sm">
            React
          </p>
          <p className="bg-gray-700 text-xs font-mono text-white w-max px-[6px] font-bold tracking-[0.5px] leading-[24px] rounded-sm">
            NextJS
          </p>
          <p className="bg-gray-700 text-xs font-mono text-white w-max px-[6px] font-bold tracking-[0.5px] leading-[24px] rounded-sm">
            Tailwind
          </p>
          <p className="bg-gray-700 text-xs font-mono text-white w-max px-[6px] font-bold tracking-[0.5px] leading-[24px] rounded-sm">
            Figma
          </p>
          <p className="bg-gray-700 text-xs font-mono text-white w-max px-[6px] font-bold tracking-[0.5px] leading-[24px] rounded-sm">
            ExpressJS
          </p>
        </div>
        <div className="mt-5">
          <h3 className="font-bold text-[20px] tracking-[-0.3px]">Github Activity</h3>
          <img
            src="https://ghchart.rshah.org/DarilInsanKamil"
            alt="Name Your Github chart"
            className="mt-3"
          />
        </div>
        <section className="mt-5">
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-[20px] tracking-[-0.3px]">Project</h3>
            <a href="#" className="thicker-[1px] text-gray-600 text-sm">
              more project
            </a>
          </div>

          <div className="flex md:flex-row flex-col gap-2 mt-3">
            <div className="w-full border border-gray-200 p-3 rounded-md hover:bg-slate-100 hover:cursor-pointer">
              <h4 className="font-medium text-[16px] tracking-[-0.3px]">
                JobFinder
              </h4>
              <p className="font-mono font-thin text-sm text-gray-600 mt-5">
                Final project dari Bootcamp Sanbercode.
              </p>
              <div className="mt-3 flex gap-2 flex-wrap">
                <p className="bg-gray-200 text-xs font-mono text-gray-900 w-max px-[6px] font-bold tracking-[0.5px] leading-[24px] rounded-sm">
                  NextJS
                </p>
                <p className="bg-gray-200 text-xs font-mono text-gray-900 w-max px-[6px] font-bold tracking-[0.5px] leading-[24px] rounded-sm">
                  Tailwind
                </p>
                <p className="bg-gray-200 text-xs font-mono text-gray-900 w-max px-[6px] font-bold tracking-[0.5px] leading-[24px] rounded-sm">
                  React Query
                </p>
                <p className="bg-gray-200 text-xs font-mono text-gray-900 w-max px-[6px] font-bold tracking-[0.5px] leading-[24px] rounded-sm">
                  Zod
                </p>
                <p className="bg-gray-200 text-xs font-mono text-gray-900 w-max px-[6px] font-bold tracking-[0.5px] leading-[24px] rounded-sm">
                  React Hook Form
                </p>
              </div>
            </div>
            <div className="w-full border border-gray-200 p-3 rounded-md hover:bg-slate-100 hover:cursor-pointer">
              <h4 className="font-medium text-[16px] tracking-[-0.3px] hover:underline hover:cursor-pointer">
                AnimeList
              </h4>
              <p className="font-mono font-thin text-sm text-gray-600 mt-5">
                Explorasi NextJs App Router.
              </p>
              <div className="mt-3 flex gap-2 flex-wrap">
                <p className="bg-gray-200 text-xs font-mono text-gray-900 w-max px-[6px] font-bold tracking-[0.5px] leading-[24px] rounded-sm">
                  NextJS
                </p>
                <p className="bg-gray-200 text-xs font-mono text-gray-900 w-max px-[6px] font-bold tracking-[0.5px] leading-[24px] rounded-sm">
                  Tailwind
                </p>
              </div>
            </div>
            <div className="w-full border border-gray-200 p-3 rounded-md hover:bg-slate-100 hover:cursor-pointer">
              <h4 className="font-medium text-[16px] tracking-[-0.3px] hover:underline hover:cursor-pointer">
                IU Landing Page
              </h4>
              <p className="font-mono font-thin text-sm text-gray-600 mt-5">
                Explorasi design website IU (Lee Ji Eun)
              </p>
              <div className="mt-3 flex gap-2 flex-wrap">
                <p className="bg-gray-200 text-xs font-mono text-gray-900 w-max px-[6px] font-bold tracking-[0.5px] leading-[24px] rounded-sm">
                  React Vite
                </p>
                <p className="bg-gray-200 text-xs font-mono text-gray-900 w-max px-[6px] font-bold tracking-[0.5px] leading-[24px] rounded-sm">
                  Tailwind
                </p>
                <p className="bg-gray-200 text-xs font-mono text-gray-900 w-max px-[6px] font-bold tracking-[0.5px] leading-[24px] rounded-sm">
                  React Router
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>
      <section className="mt-5 col-span-2 ">
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-[20px] tracking-[-0.3px]">Blog</h3>
          <a href="#" className="thicker-[1px] text-gray-600 text-sm">
            more
          </a>
        </div>
        <div>
          <div className="mt-3">
            <a
              href="#"
              className="font-medium text-[16px] tracking-[-0.3px]  hover:underline"
            >
              Menyederhanakan pencarian studio untuk konten kreator
            </a>
            <p className="font-mono font-thin text-sm text-gray-600 mt-2 md:w-[800px]">
              kurangnya informasi yang disediakan di website atau media sosial.
              Proses booking studio yang ribet. Kurangnya ulasan jadi membuat
              bingung apakah studio tersebut bagus atau tidak.
            </p>
          </div>
          <div className="w-full border-b mt-3 border-gray-200"></div>
          <div className="mt-3">
            <a
              href="#"
              className="font-medium text-[16px] tracking-[-0.3px]  hover:underline"
            >
              Security Labs Brand Guidelines
            </a>
            <p className="font-mono font-thin text-sm text-gray-600 mt-2 md:w-[800px]">
              Eksplorasi design brand guideline security labs.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
