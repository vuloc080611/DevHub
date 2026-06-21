import { z } from "zod";
import { protectedProcedure, router } from "../trpc";

export const snippetsRouter = router({
  getAll: protectedProcedure.query(async ({ ctx }) => {
    return ctx.db.snippet.findMany({
      where: { userId: ctx.session.user.id },
      orderBy: { createdAt: "desc" },
    });
  }),
  create: protectedProcedure
    .input(z.object({ title: z.string(), code: z.string(), language: z.string() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.snippet.create({
        data: { ...input, userId: ctx.session.user.id },
      });
    }),
});
