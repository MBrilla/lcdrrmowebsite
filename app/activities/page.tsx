import React from "react";
import type { Metadata } from "next";
import BlogSystem from "@/components/BlogSystem";

export const metadata: Metadata = {
  title: "Activities & DRRM Programs | Lipa City Disaster Risk Reduction & Management Office",
  description:
    "Official documentation of school earthquake simulation drills, community Basic Life Support (BLS) trainings, hazard vulnerability inspections, and disaster preparedness programs across the 72 barangays of Lipa City.",
};

export default function ActivitiesPage() {
  return <BlogSystem initialTab="activities" />;
}
