import type { Metadata } from "next";
import { redirect } from "next/navigation";
import Admin from "@/components/Admin";
import { isAdminAuthenticated } from "@/lib/session";

export const metadata: Metadata = {
  title: "Dodaj projekt | Panel administratora",
};

export default async function AdminProjectsPage() {
  if (!(await isAdminAuthenticated())) {
    redirect("/admin/login");
  }

  return <Admin />;
}
