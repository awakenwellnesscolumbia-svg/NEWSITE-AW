// ============================================================
// AWAKEN WELLNESS — Condition Page Router
// Reads :slug from URL and renders the correct condition page
// ============================================================

import { useParams } from "wouter";
import ConditionPage, { CONDITION_DATA } from "./ConditionPage";
import NotFound from "./NotFound";

export default function ConditionPageRouter() {
  const { slug } = useParams<{ slug: string }>();
  const data = CONDITION_DATA[slug];

  if (!data) {
    return <NotFound />;
  }

  return <ConditionPage data={data} />;
}
