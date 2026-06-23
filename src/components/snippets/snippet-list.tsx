import type { Snippet } from "@prisma/client";

export default function SnippetList({ snippets }: { snippets: Snippet[] }) {
  return (
    <div className="space-y-3">
      {snippets.map((s) => (
        <div key={s.id} className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow">
          <h3 className="font-semibold">{s.title}</h3>
          <pre className="text-sm mt-1 overflow-auto bg-gray-100 dark:bg-gray-900 p-2 rounded">
            {s.code}
          </pre>
        </div>
      ))}
    </div>
  );
}
