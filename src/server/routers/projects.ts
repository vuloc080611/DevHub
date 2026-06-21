import { z } from "zod";
import { protectedProcedure, router } from "../trpc";

export const projectsRouter = router({
  getAll: protectedProcedure.query(({ ctx }) =>
    ctx.db.project.findMany({ where: { userId: ctx.session.user.id }, include: { tasks: true } })
  ),
  create: protectedProcedure
    .input(z.object({ name: z.string(), color: z.string().optional(), githubRepo: z.string().optional() }))
    .mutation(({ ctx, input }) =>
      ctx.db.project.create({ data: { ...input, userId: ctx.session.user.id } })
    ),
});
