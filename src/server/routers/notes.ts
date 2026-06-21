import { z } from "zod";
import { protectedProcedure, router } from "../trpc";

export const notesRouter = router({
  getAll: protectedProcedure.query(({ ctx }) =>
    ctx.db.note.findMany({ where: { userId: ctx.session.user.id }, orderBy: { updatedAt: "desc" } })
  ),
  create: protectedProcedure
    .input(z.object({ title: z.string(), content: z.string() }))
    .mutation(({ ctx, input }) =>
      ctx.db.note.create({ data: { ...input, userId: ctx.session.user.id } })
    ),
});
