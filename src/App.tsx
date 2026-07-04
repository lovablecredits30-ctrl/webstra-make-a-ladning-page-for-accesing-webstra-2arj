import { Sparkles } from "lucide-react";

export default function App() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-xl text-center">
        <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs text-muted-foreground mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          Fresh project
        </div>
        <h1 className="text-5xl font-semibold tracking-tight">make a ladning page for accesing webstra.co website</h1>
        <p className="mt-4 text-muted-foreground">
          Ask the AI on the left to build your site. Every change hot-reloads here.
        </p>
      </div>
    </main>
  );
}
