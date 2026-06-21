import "server-only";
import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import type { AppRouter } from "@/server/routers/_app";
import superjson from "superjson";

export const serverClient = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: process.env.NEXT_PUBLIC_VERCEL_URL
        ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/trpc`
        : "http://localhost:3000/api/trpc",
      transformer: superjson,
    }),
  ],
});
