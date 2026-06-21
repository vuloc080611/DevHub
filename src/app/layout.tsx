import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/providers/session-provider";
import TRPCProvider from "@/providers/trpc-provider";
import Navbar from "@/components/layouts/navbar";
import Sidebar from "@/components/layouts/sidebar";

export const metadata: Metadata = {
  title: "DevHub – Developer Workspace",
  description: "All-in-one workspace for developers.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex h-screen overflow-hidden">
        <Providers>
          <TRPCProvider>
            <Sidebar />
            <div className="flex flex-1 flex-col overflow-hidden">
              <Navbar />
              <main className="flex-1 overflow-auto p-6">{children}</main>
            </div>
          </TRPCProvider>
        </Providers>
      </body>
    </html>
  );
}
