import { useState } from "react";
import Header from "./components/Header";
import Charts from "./components/Charts";
import Response from "./components/Response";

export default function KodoDashboard() {
  const [isRunning, setIsRunning] = useState(false);
  const [terminalOutput, setTerminalOutput] = useState([
    "Status: Awaiting manual trigger...",
  ]);
  const [results, setResults] = useState([]);

  const runDiagnostics = async () => {
    setIsRunning(true);
    setResults([]);
    setTerminalOutput([
      "> Initializing Kodo sequence...",
      "策 kodo is thinking...",
    ]);

    try {
      const res = await fetch("https://kodo-back.vercel.app/api/status");
      const json = await res.json();
      const data = json.data;

      const lines = data.map((r) =>
        r.ok
          ? `✅ ${r.role}: Operational (${r.latency_ms}ms)`
          : `❌ ${r.role}: Unoperational`,
      );

      setResults(data);
      setTerminalOutput((prev) => [
        ...prev,
        ...lines,
        "=========================================",
        "Diagnostics Complete.",
      ]);
    } catch (e) {
      setTerminalOutput((prev) => [
        ...prev,
        `❌ Backend unreachable: ${e.message}`,
      ]);
    } finally {
      setIsRunning(false);
    }
  };

  return (
    <div className="relative flex flex-col w-full h-screen gap-4 overflow-hidden font-sans bg-white text-slate-800 selection:bg-blue-200">
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: "radial-gradient(black 1.5px, transparent 1.5px)",
          backgroundSize: "28px 28px",
          backgroundPosition: "center top",
          maskImage: "linear-gradient(to bottom, black 40%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 40%, transparent 100%)",
        }}
      />
      <div className="relative z-10 flex flex-col h-full">
        <Header isRunning={isRunning} runDiagnostics={runDiagnostics} />
        <div className="flex gap-4 px-20 pb-10 overflow-y-auto">
          <div className="flex flex-col py-4 w-full gap-6">
            <Charts />
            <Response
              isRunning={isRunning}
              terminalOutput={terminalOutput}
              results={results}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
