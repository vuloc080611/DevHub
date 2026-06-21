import { z } from "zod";
import { protectedProcedure, router } from "../trpc";

export const bookmarksRouter = router({
  getAll: protectedProcedure.query(({ ctx }) =>
    ctx.db.bookmark.findMany({ where: { userId: ctx.session.user.id } })
  ),
  create: protectedProcedure
    .input(z.object({ url: z.string(), title: z.string(), tags: z.array(z.string()) }))
    .mutation(({ ctx, input }) =>
      ctx.db.bookmark.create({ data: { ...input, userId: ctx.session.user.id } })
    ),
});
