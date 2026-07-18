import type { Metadata } from "next";
import { redirect } from "next/navigation";
import Login from "@/components/Login";
import { isAdminAuthenticated } from "@/lib/session";

export const metadata: Metadata = {
  title: "Logowanie | Panel administratora",
};

export default async function AdminLoginPage() {
  if (await isAdminAuthenticated()) {
    redirect("/admin/projects");
  }

  return <Login />;
}
