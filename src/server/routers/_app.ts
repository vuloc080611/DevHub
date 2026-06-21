import { router } from "../trpc";
import { snippetsRouter } from "./snippets";
import { notesRouter } from "./notes";
import { projectsRouter } from "./projects";
import { tasksRouter } from "./tasks";
import { bookmarksRouter } from "./bookmarks";
import { pomodoroRouter } from "./pomodoro";

export const appRouter = router({
  snippets: snippetsRouter,
  notes: notesRouter,
  projects: projectsRouter,
  tasks: tasksRouter,
  bookmarks: bookmarksRouter,
  pomodoro: pomodoroRouter,
});

export type AppRouter = typeof appRouter;
