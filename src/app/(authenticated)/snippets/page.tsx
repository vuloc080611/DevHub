import { auth } from "@devhub/auth";
import { serverClient } from "@/trpc/server";
import SnippetList from "@/components/snippets/snippet-list";

export default async function SnippetsPage() {
  const session = await auth();
  if (!session?.user) return null;
  const snippets = await serverClient.snippets.getAll();
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Code Snippets</h1>
      <SnippetList snippets={snippets} />
    </div>
  );
}
