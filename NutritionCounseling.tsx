// ============================================================
// AWAKEN WELLNESS — Blog Post Router
// Reads :slug from URL and renders the correct blog post
// ============================================================

import { useParams } from "wouter";
import BlogPost, { BLOG_POST_DATA } from "./BlogPost";
import NotFound from "./NotFound";

export default function BlogPostRouter() {
  const { slug } = useParams<{ slug: string }>();
  const data = BLOG_POST_DATA[slug];

  if (!data) {
    return <NotFound />;
  }

  return <BlogPost data={data} />;
}
