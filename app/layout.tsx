import type { Metadata } from "next";
import "./globals.css";
import AppTheme from "@/components/AppTheme";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Moje portfolio",
  description: "Portfolio Jana Wojtysiaka",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body>
        <AppTheme>
          <Navbar />
          <main>{children}</main>
        </AppTheme>
      </body>
    </html>
  );
}
