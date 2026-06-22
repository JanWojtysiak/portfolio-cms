import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v16-appRouter";
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
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <AppTheme>
            <Navbar />
            <main>{children}</main>
          </AppTheme>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
