import React from "react";
import figlet from "figlet";
// 1. Import the raw font data directly
import bigFont from "figlet/importable-fonts/Big.js";

// 2. Load the font into figlet's memory synchronously
figlet.parseFont("Big", bigFont);

export default function Banner() {
  // Now textSync will work because the "Big" font is already loaded
  const artText = figlet.textSync("# K o d o ", { font: "Big" });

  const artLines = artText.split("\n").filter((l) => l.trim() !== "");
  const width = Math.max(...artLines.map((l) => l.length));
  const innerW = width + 4;

  const top = `  ╔${"═".repeat(innerW)}╗`;
  const bot = `  ╚${"═".repeat(innerW)}╝`;

  const styles = {
    container: {
      backgroundColor: "#0d1117",
      color: "#c9d1d9",
      padding: "20px",
      fontFamily: "monospace",
      lineHeight: "1.2",
      whiteSpace: "pre",
    },
    blue: { color: "#3b82f6" },
    blueBold: { color: "#3b82f6", fontWeight: "bold" },
    dim: { color: "#6e7681" },
  };

  return (
    <pre style={styles.container}>
      <div style={styles.blue}>{top}</div>
      {artLines.map((line, index) => (
        <div key={index}>
          <span style={styles.blue}>  ║  </span>
          <span style={styles.blueBold}>{line.padEnd(width, " ")}</span>
          <span style={styles.blue}>  ║  </span>
        </div>
      ))}
      <div style={styles.blue}>{bot}</div>
      <div>
        <span> </span>
        <span style={styles.blueBold}>索 Kodo </span>
        <span style={styles.dim}>v0.1.0</span>
        <span> </span>
        <span style={styles.dim}>—</span>
        <span>LLMs Heartbeat Dashboard</span>
      </div>
    </pre>
  );
}
