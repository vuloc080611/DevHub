import { z } from "zod";
import { protectedProcedure, router } from "../trpc";

export const pomodoroRouter = router({
  startSession: protectedProcedure
    .input(z.object({ type: z.enum(["work", "break"]), duration: z.number() }))
    .mutation(({ ctx, input }) =>
      ctx.db.pomodoroSession.create({
        data: {
          type: input.type,
          duration: input.duration,
          startTime: new Date(),
          userId: ctx.session.user.id,
        },
      })
    ),
  getTodaySessions: protectedProcedure.query(({ ctx }) =>
    ctx.db.pomodoroSession.findMany({
      where: {
        userId: ctx.session.user.id,
        startTime: { gte: new Date(new Date().setHours(0, 0, 0, 0)) },
      },
    })
  ),
});
