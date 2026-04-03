"use client";

import { useState } from "react";

type Tab = "about" | "history";

export default function AboutTabs({
  aboutContent,
  historyContent,
}: {
  aboutContent: React.ReactNode;
  historyContent: React.ReactNode;
}) {
  const [tab, setTab] = useState<Tab>("about");

  return (
    <div className="flex flex-col flex-1 overflow-hidden">

      {/* Tab navigation */}
      <div className="flex-shrink-0 bg-[#060f2a] border-b border-blue-900/40">
        <div className="max-w-7xl mx-auto px-6 flex gap-1 py-2">
          {(
            [
              { key: "about",   label: "회사소개", sub: "COMPANY" },
              { key: "history", label: "연혁",     sub: "HISTORY" },
            ] as { key: Tab; label: string; sub: string }[]
          ).map(({ key, label, sub }) => (
            <button
              key={key}
              onClick={() => setTab(key)}
              className={`group flex items-center gap-2.5 px-5 py-2.5 text-sm font-bold tracking-wide
                transition-all duration-200 border-b-2 ${
                  tab === key
                    ? "border-sky-400 text-sky-300 bg-sky-400/[0.06]"
                    : "border-transparent text-blue-300/50 hover:text-blue-200 hover:border-blue-600/50"
                }`}
            >
              {label}
              <span className={`eng text-[9px] tracking-widest font-semibold transition-colors ${
                tab === key ? "text-sky-400/60" : "text-blue-400/30 group-hover:text-blue-400/50"
              }`}>
                {sub}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Scrollable tab content (browser scrollbar hidden) */}
      <div className="flex-1 overflow-y-auto no-scrollbar">
        {tab === "about" ? aboutContent : historyContent}
      </div>
    </div>
  );
}
