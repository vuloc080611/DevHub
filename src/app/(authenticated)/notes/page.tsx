import { auth } from "@devhub/auth";
import { serverClient } from "@/trpc/server";
import NoteEditor from "@/components/notes/note-editor";

export default async function NotesPage() {
  const session = await auth();
  if (!session?.user) return null;
  const notes = await serverClient.notes.getAll();
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Notes</h1>
      <NoteEditor />
      <div className="mt-6 space-y-3">
        {notes.map((note) => (
          <div key={note.id} className="p-3 bg-white dark:bg-gray-800 rounded shadow">
            <h3 className="font-semibold">{note.title}</h3>
            <p className="text-sm mt-1">{note.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
