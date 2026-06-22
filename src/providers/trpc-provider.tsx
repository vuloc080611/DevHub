"use client";
import { TRPCProvider } from "@/trpc/react";
export default function TRPCProviderWrapper({ children }: { children: React.ReactNode }) {
  return <TRPCProvider>{children}</TRPCProvider>;
}
