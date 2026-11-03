import { Play, Terminal, Activity, Server } from "lucide-react";

function Header({runDiagnostics, isRunning}) {
  return (
    <div className="flex w-full items-center justify-between bg-white border border-slate-200 px-12 py-2 shadow-sm rounded-md">
      <div className="flex items-center space-x-3">
        <h1 className="font-mono font-bold text-lg tracking-tight text-slate-900">
          死
        </h1>
        <h1 className="font-mono font-bold text-lg tracking-tight text-slate-900">
          kodo
        </h1>
      </div>
      <button
        onClick={runDiagnostics}
        disabled={isRunning}
        className="flex items-center px-4 py-2 font-mono text-sm font-semibold rounded transition-colors bg-black text-white cursor-pointer border border-slate-200"
      >
        <Play className="w-4 h-4 mr-2" />
        {isRunning ? "EXECUTING..." : "RUN DIAGNOSTICS"}
      </button>
    </div>
  );
}

export default Header;
