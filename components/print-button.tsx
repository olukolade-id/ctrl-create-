"use client";

export function PrintButton() {
  return (
    <button className="cv-print" type="button" onClick={() => window.print()}>
      Print / save as PDF <span>↗</span>
    </button>
  );
}