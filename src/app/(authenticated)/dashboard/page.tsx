import { auth } from "@devhub/auth";
import { db } from "@devhub/db";
import Stats from "@/components/dashboard/stats";

export default async function Dashboard() {
  const session = await auth();
  if (!session?.user) return null;
  const snippetsCount = await db.snippet.count({ where: { userId: session.user.id } });
  const notesCount = await db.note.count({ where: { userId: session.user.id } });
  const tasksCount = await db.task.count({ where: { userId: session.user.id } });
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <Stats snippets={snippetsCount} notes={notesCount} tasks={tasksCount} />
    </div>
  );
}
