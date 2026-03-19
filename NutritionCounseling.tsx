// ============================================================
// AWAKEN WELLNESS — Blog Post Router
// Reads :slug from URL and renders the correct blog post
// ============================================================

import { useParams, Redirect } from "wouter";
import BlogPost, { BLOG_POST_DATA } from "./BlogPost";

export default function BlogPostRouter() {
  const { slug } = useParams<{ slug: string }>();
  const data = BLOG_POST_DATA[slug];

  if (!data) {
    return <Redirect to="/blog" />;
  }

  return <BlogPost data={data} />;
}
