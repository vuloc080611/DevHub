export default function BookmarkCard({ bookmark }: { bookmark: any }) {
  return (
    <a href={bookmark.url} target="_blank" rel="noreferrer" className="block p-3 bg-white dark:bg-gray-800 rounded shadow hover:shadow-md transition">
      <h3 className="font-semibold">{bookmark.title}</h3>
      <div className="flex gap-1 mt-1">
        {bookmark.tags.map((t: string) => (
          <span key={t} className="text-xs bg-blue-100 dark:bg-blue-900 px-2 py-0.5 rounded-full">{t}</span>
        ))}
      </div>
    </a>
  );
}
