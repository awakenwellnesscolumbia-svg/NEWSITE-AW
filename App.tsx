// ============================================================
// AWAKEN WELLNESS — Condition Page Router
// Reads :slug from URL and renders the correct condition page
// ============================================================

import { useParams, Redirect } from "wouter";
import ConditionPage, { CONDITION_DATA } from "./ConditionPage";

export default function ConditionPageRouter() {
  const { slug } = useParams<{ slug: string }>();
  const data = CONDITION_DATA[slug];

  if (!data) {
    return <Redirect to="/conditions" />;
  }

  return <ConditionPage data={data} />;
}
