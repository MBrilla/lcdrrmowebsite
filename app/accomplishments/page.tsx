import React from "react";
import type { Metadata } from "next";
import BlogSystem from "@/components/BlogSystem";

export const metadata: Metadata = {
  title: "Accomplishments & Emergency Reports | Lipa City Disaster Risk Reduction & Management Office",
  description:
    "Official operational logs, emergency vehicular accident responses, rapid road clearings, emergency medical dispatches, and quarterly accomplishment reports published by Lipa CDRRMO.",
};

export default function AccomplishmentsPage() {
  return <BlogSystem initialTab="accomplishments" />;
}
