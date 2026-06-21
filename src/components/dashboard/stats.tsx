import { Card } from "@/components/ui/card";

export default function Stats({ snippets, notes, tasks }: { snippets: number; notes: number; tasks: number }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card>
        <h3 className="text-lg">Snippets</h3>
        <p className="text-3xl font-bold">{snippets}</p>
      </Card>
      <Card>
        <h3 className="text-lg">Notes</h3>
        <p className="text-3xl font-bold">{notes}</p>
      </Card>
      <Card>
        <h3 className="text-lg">Tasks</h3>
        <p className="text-3xl font-bold">{tasks}</p>
      </Card>
    </div>
  );
}
