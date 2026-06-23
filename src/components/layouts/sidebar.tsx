"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Code2, FileText, Kanban, Bookmark, Timer, LayoutDashboard } from "lucide-react";
import { classNames } from "@devhub/utils";

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Snippets", href: "/snippets", icon: Code2 },
  { name: "Notes", href: "/notes", icon: FileText },
  { name: "Projects", href: "/projects", icon: Kanban },
  { name: "Bookmarks", href: "/bookmarks", icon: Bookmark },
  { name: "Pomodoro", href: "/pomodoro", icon: Timer },
];

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <aside className="w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 p-4 flex flex-col">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-brand-500">DevHub</h2>
      </div>
      <nav className="flex flex-col gap-1">
        {navigation.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={classNames(
              "flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition",
              pathname === item.href
                ? "bg-blue-100 dark:bg-blue-900 text-blue-600"
                : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            )}
          >
            <item.icon size={18} />
            {item.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
