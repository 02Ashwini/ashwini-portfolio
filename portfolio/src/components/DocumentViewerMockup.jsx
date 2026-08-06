import { FiSearch, FiMessageSquare } from "react-icons/fi";

const lines = [100, 88, 94, 60, 100, 82, 91, 45];

export default function DocumentViewerMockup() {
  return (
    <div className="w-full h-full flex flex-col bg-surface-2 text-[10px]">
      {/* toolbar */}
      <div className="flex items-center gap-2 px-3 py-2 border-b border-line bg-surface">
        <div className="flex items-center gap-1.5 flex-1 max-w-[140px] px-2 py-1 rounded-md bg-bg border border-line">
          <FiSearch className="text-muted text-[11px]" />
          <span className="text-muted">invoice_2024</span>
          <span className="w-px h-3 bg-accent/70 animate-pulse ml-0.5" />
        </div>
        <div className="flex items-center gap-1 ml-auto">
          <span className="px-1.5 py-0.5 rounded bg-bg border border-line text-muted">
            100%
          </span>
        </div>
      </div>

      {/* body: document + annotation rail */}
      <div className="flex-1 flex gap-3 px-4 py-4">
        <div className="flex-1 rounded-md bg-bg border border-line p-4 space-y-2">
          {lines.map((w, i) => (
            <div
              key={i}
              className={`h-1.5 rounded-full ${
                i === 3
                  ? "bg-accent/50"
                  : "bg-ink/10"
              }`}
              style={{ width: `${w}%` }}
            />
          ))}
        </div>

        <div className="w-[38%] hidden sm:flex flex-col gap-2">
          <p className="mono-label !text-[9px] !text-muted">Annotations</p>
          {[1, 2].map((i) => (
            <div
              key={i}
              className="rounded-md bg-bg border border-line p-2 flex items-start gap-1.5"
            >
              <FiMessageSquare className="text-accent text-[11px] mt-0.5 shrink-0" />
              <div className="space-y-1 flex-1">
                <div className="h-1 w-3/4 rounded-full bg-ink/15" />
                <div className="h-1 w-1/2 rounded-full bg-ink/10" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
