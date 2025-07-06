import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { MDXProvider } from "@mdx-js/react";

export default function BlogDetail() {
  const { blogId } = useParams();
  const [MDXContent, setMDXContent] = useState<React.ComponentType | null>(
    null
  );

  useEffect(() => {
    import(`../../posts/${blogId}.mdx`)
      .then((mod) => setMDXContent(() => mod.default))
      .catch(() => setMDXContent(() => null));
  }, [blogId]);

  if (MDXContent === null) return <div>Blog tidak ditemukan.</div>;
  return (
    <div className="prose p-10">
      <MDXProvider>
        <MDXContent />
      </MDXProvider>
    </div>
  );
}
