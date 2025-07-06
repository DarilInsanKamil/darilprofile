import { projectData } from "../utils/data";

export function CardProject() {
  return (
    <>
      {projectData.map((res, idx) => (
        <a
          key={idx}
          href={res.url}
          target="_blank"
          className="w-full border border-gray-200 p-3 rounded-md hover:bg-slate-100 hover:cursor-pointer"
        >
          <div>
            <h4 className="font-medium text-[16px] tracking-[-0.3px]">
              {res.title}
            </h4>
            <p className="font-mono font-thin text-sm text-gray-600 mt-5 line-clamp-3">
              {res.description}
            </p>
            <div className="mt-3 flex gap-2 flex-wrap" >
              {res.stack.map((stack, i) => (
                <p key={i} className="bg-gray-200 text-xs font-mono text-gray-900 w-max px-[6px] font-bold tracking-[0.5px] leading-[24px] rounded-sm">
                  {stack}
                </p>
              ))}
            </div>
          </div>
        </a>
      ))}
    </>
  );
}
