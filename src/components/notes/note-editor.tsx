"use client";
import { useState } from "react";
import { api } from "@/trpc/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function NoteEditor() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const utils = api.useUtils();
  const create = api.notes.create.useMutation({
    onSuccess: () => {
      utils.notes.getAll.invalidate();
      setTitle("");
      setContent("");
    },
  });

  return (
    <div className="space-y-3">
      <Input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <textarea
        className="w-full h-32 rounded-md border border-gray-300 dark:border-gray-600 p-2"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Write your note..."
      />
      <Button onClick={() => create.mutate({ title, content })} disabled={create.isPending}>
        Save
      </Button>
    </div>
  );
}
