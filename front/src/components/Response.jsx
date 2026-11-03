import { useState } from "react";
import { Terminal, Server } from "lucide-react";
import Banner from "../components/Banner";

function Response({ isRunning, terminalOutput, results }) {

  return (
    <div className="flex w-full justify-between items-center gap-6">
      {/* Section 3.1: Model / Product Mapping */}
      <div className="flex flex-col w-full overflow-hidden  border rounded-md shadow-sm border-slate-200 min-h-100">
        <div className="flex items-center p-3 border-b bg-slate-100 border-slate-200">
          <Server className="w-4 h-4 mr-2 text-slate-500" />
          <h2 className="font-mono text-sm font-bold tracking-wider uppercase text-slate-700">
            Active Configuration
          </h2>
        </div>
        <div className="p-0 overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-xs font-medium tracking-wider uppercase border-b bg-slate-50 font-mono text-slate-500 border-slate-200">
                <th className="p-4 font-medium">Role</th>
                <th className="p-4 font-medium">Model</th>
                <th className="p-4 font-medium">Status</th>
                <th className="p-4 font-medium">Latency</th>
              </tr>
            </thead>
            <tbody className="text-sm font-mono">
              {results.length === 0 && (
                <tr>
                  <td colSpan={4} className="p-4 text-slate-400">
                    No data yet. Run diagnostics.
                  </td>
                </tr>
              )}
              {results.map((item) => (
                <tr
                  key={item.role}
                  className="border-b border-slate-100 last:border-0 hover:bg-slate-50"
                >
                  <td className="p-4 font-semibold text-slate-800">
                    {item.role}
                  </td>
                  <td className="p-4 text-slate-500">{item.model}</td>
                  <td
                    className={`p-4 ${item.ok ? "text-emerald-600" : "text-red-500"}`}
                  >
                    {item.ok ? "Operational" : "Down"}
                  </td>
                  <td className="p-4 text-slate-600">{item.latency_ms}ms</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Section 3.2: Light-Themed Terminal Output */}
      <div className="flex flex-col w-full border rounded-md shadow-sm border-slate-300 min-h-100">
        <div className="flex items-center justify-between p-2 px-4 border-b bg-slate-100 border-slate-300">
          <div className="flex items-center">
            <Terminal className="w-4 h-4 mr-2 text-slate-600" />
            <span className="text-xs font-bold font-mono text-slate-600">
              kodo-stdout ~ bash
            </span>
          </div>
          <div className="flex space-x-1.5">
            <div className="w-3 h-3 rounded-full bg-slate-300"></div>
            <div className="w-3 h-3 rounded-full bg-slate-300"></div>
            <div className="w-3 h-3 rounded-full bg-slate-300"></div>
          </div>
        </div>

        {/* Adjusted padding and layout for the terminal window */}
        <div className="flex-1 px-4 py-1 bg-[#0d1117] overflow-y-auto font-mono text-sm leading-relaxed">
          {/* 1. Render the JSX Banner directly at the top */}
          <Banner />

          {/* 2. Map the text logs below it */}
          <div className="mt-1 whitespace-pre-wrap">
            {terminalOutput.map((line, index) => (
              <div
                key={index}
                className={
                  line.includes("✅")
                    ? "text-emerald-500 font-semibold" // Adjusted colors for dark bg
                    : line.includes("❌")
                      ? "text-red-500 font-semibold"
                      : line.includes("策")
                        ? "text-blue-500 font-bold"
                        : "text-slate-300" // Default text color for standard logs
                }
              >
                {line}
              </div>
            ))}
            {isRunning && (
              <div className="inline-block w-2 h-4 mt-1 animate-pulse bg-slate-300"></div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Response;
