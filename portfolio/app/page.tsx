"use client";

import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { PluggableList } from "react-markdown/lib/react-markdown";
import rehypeRaw from "rehype-raw";

export default function Home() {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    fetch("/Resume.md")
      .then((res) => res.text())
      .then((text) => setMarkdown(text));
  }, []);
  return (
    <main className="p-12">
      <ReactMarkdown
        rehypePlugins={[rehypeRaw] as PluggableList }
        className="prose mx-auto dark:prose-invert"
      >
        {markdown}
      </ReactMarkdown>
    </main>
  );
}
