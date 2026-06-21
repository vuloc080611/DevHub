import { z } from "zod";
import { protectedProcedure, router } from "../trpc";

export const tasksRouter = router({
  getByProject: protectedProcedure
    .input(z.object({ projectId: z.string() }))
    .query(({ ctx, input }) =>
      ctx.db.task.findMany({ where: { projectId: input.projectId, userId: ctx.session.user.id } })
    ),
  create: protectedProcedure
    .input(z.object({ title: z.string(), projectId: z.string(), status: z.string().optional() }))
    .mutation(({ ctx, input }) =>
      ctx.db.task.create({ data: { ...input, userId: ctx.session.user.id } })
    ),
});
