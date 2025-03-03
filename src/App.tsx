import { DateRangePicker } from "@/components/date-range-picker";
import { Button } from "@/components/ui/button";
import { GithubIcon } from "lucide-react";

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center py-12 px-4 bg-background">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          Shadcn Date Range Picker
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          An enhanced date range picker built with shadcn/ui — featuring
          multi-month views, text entry, preset ranges, responsive design and
          date range comparisons.
        </p>
        <div className="flex items-center justify-center gap-4 mt-6">
          <Button variant="outline" size="sm" asChild>
            <a
              href="https://github.com/tracepanic/shadcn-date-range-picker"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon className="mr-2 h-4 w-4" />
              GitHub
            </a>
          </Button>
        </div>
      </header>

      <div className="w-full max-w-2xl border rounded-lg p-6 bg-card shadow-sm mb-12">
        <h2 className="text-xl font-semibold mb-4">Try It Out</h2>
        <div className="flex flex-col items-center">
          <DateRangePicker />
        </div>
      </div>

      <div className="w-full max-w-2xl space-y-6 mb-12">
        <h2 className="text-2xl font-semibold">Features</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Multi-month calendar views</li>
          <li>Direct date text entry</li>
          <li>Preset date ranges</li>
          <li>Date range comparison feature</li>
          <li>Fully responsive design</li>
          <li>Keyboard navigation</li>
          <li>Customizable via Tailwind CSS</li>
        </ul>
      </div>

      <footer className="w-full max-w-2xl text-center text-sm text-muted-foreground mt-auto pt-8 border-t">
        <p className="mb-2">
          Based on the original{" "}
          <a
            href="https://github.com/johnpolacek/date-range-picker-for-shadcn"
            className="font-medium underline underline-offset-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            DateRangePicker
          </a>{" "}
          by John Polacek.
        </p>
      </footer>
    </div>
  );
}

export default App;
