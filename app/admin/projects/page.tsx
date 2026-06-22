import type { Metadata } from "next";
import Admin from "@/components/Admin";

export const metadata: Metadata = {
  title: "Dodaj projekt | Panel administratora",
};

export default function AdminProjectsPage() {
  return <Admin />;
}
