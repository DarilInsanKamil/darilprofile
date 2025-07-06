import { blogData } from "../utils/data";

export function CardBlog() {
  return (
    <>
      {blogData.map((res, idx) => (
        <div className="mt-3 group cursor-pointer" key={idx}>
          <a
            href={res.url}
            className="font-medium text-[16px] tracking-[-0.3px] group-hover:underline"
          >
            {res.title}
          </a>
          <p className="font-mono font-thin text-sm text-gray-600 mt-2 md:w-[900px] line-clamp-3">
            {res.description}
          </p>
          <div className="w-full border-b mt-3 border-gray-200"></div>
        </div>
      ))}
    </>
  );
}
