import { auth } from "@devhub/auth";
import { serverClient } from "@/trpc/server";
import Kanban from "@/components/projects/kanban";

export default async function ProjectsPage() {
  const session = await auth();
  if (!session?.user) return null;
  const projects = await serverClient.projects.getAll();
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Projects</h1>
      {projects.map((p) => (
        <div key={p.id} className="mb-6">
          <h2 className="text-xl font-semibold">{p.name}</h2>
          <Kanban />
        </div>
      ))}
    </div>
  );
}
