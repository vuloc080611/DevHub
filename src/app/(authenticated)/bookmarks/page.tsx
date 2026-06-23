import { auth } from "@devhub/auth";
import { serverClient } from "@/trpc/server";
import BookmarkCard from "@/components/bookmarks/bookmark-card";

export default async function BookmarksPage() {
  const session = await auth();
  if (!session?.user) return null;
  const bookmarks = await serverClient.bookmarks.getAll();
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Bookmarks</h1>
      <div className="grid gap-3 md:grid-cols-2">
        {bookmarks.map((b) => (
          <BookmarkCard key={b.id} bookmark={b} />
        ))}
      </div>
    </div>
  );
}
