import { useEffect } from "react";

export default function PageMeta({ title, description, noIndex = false }) {
  useEffect(() => {
    document.title = `${title} | NexStore`;
    document.querySelector('meta[name="description"]')?.setAttribute("content", description);
    let robots = document.querySelector('meta[name="robots"]');
    if (!robots) {
      robots = document.createElement("meta");
      robots.name = "robots";
      document.head.appendChild(robots);
    }
    robots.content = noIndex ? "noindex,follow" : "index,follow";
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = `${window.location.origin}${window.location.pathname}`;
  }, [title, description, noIndex]);
  return null;
}
