"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchBar() {
  const [search, setSearch] = useState("");

  const router = useRouter();

  const handleButtonClick = () => {
    router.push(`/repo?url=${search}`);
  };

  return (
    <div className="relative flex items-start justify-center w-full max-w-xl mt-2">
      {/* Outer glow effect */}
      <div
        className="absolute -inset-4 rounded-3xl blur-2xl opacity-40 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(139, 92, 246, 0.4) 0%, rgba(99, 102, 241, 0.25) 40%, transparent 70%)",
        }}
      />
      
      {/* 3D Shadow layers for depth */}
      <div
        className="absolute inset-0 rounded-2xl"
        style={{
          transform: "translateY(6px) translateX(3px)",
          background: "rgba(0, 0, 0, 0.4)",
          filter: "blur(10px)",
        }}
      />
      <div
        className="absolute inset-0 rounded-2xl"
        style={{
          transform: "translateY(3px) translateX(1px)",
          background: "rgba(79, 70, 229, 0.1)",
          filter: "blur(6px)",
        }}
      />
      
      {/* Search container with 3D effect */}
      <div
        className="relative w-full rounded-2xl"
        style={{
          background:
            "linear-gradient(145deg, rgba(25, 20, 40, 0.95) 0%, rgba(15, 12, 25, 0.98) 50%, rgba(10, 8, 18, 0.99) 100%)",
          boxShadow: `
            0 20px 40px -10px rgba(0, 0, 0, 0.5),
            0 10px 20px -6px rgba(0, 0, 0, 0.35),
            0 0 40px rgba(139, 92, 246, 0.1),
            0 0 20px rgba(168, 85, 247, 0.08),
            inset 0 1px 0 rgba(255, 255, 255, 0.08),
            inset 0 -1px 0 rgba(0, 0, 0, 0.25),
            inset 1px 0 0 rgba(255, 255, 255, 0.03),
            inset -1px 0 0 rgba(0, 0, 0, 0.15)
          `,
          border: "1px solid rgba(139, 92, 246, 0.2)",
          borderTop: "1px solid rgba(168, 85, 247, 0.25)",
          borderBottom: "1px solid rgba(79, 70, 229, 0.12)",
        }}
      >
        {/* Inner highlight */}
        <div
          className="absolute inset-[1px] rounded-2xl pointer-events-none"
          style={{
            background: "linear-gradient(180deg, rgba(255,255,255,0.04) 0%, transparent 30%, transparent 70%, rgba(0,0,0,0.08) 100%)",
          }}
        />
        
        {/* Search textarea */}
        <textarea
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            // console.log(e.target.value);
          }}
          placeholder="Enter a github link..."
          rows={1}
          className="relative w-full px-6 py-5 text-sm text-white placeholder-gray-500 bg-transparent rounded-2xl outline-none transition-all duration-200 focus:placeholder-gray-400 resize-none overflow-hidden"
          style={{
            minHeight: "56px",
            maxHeight: "200px", // Limit to ~7 lines
            height: "56px",
            lineHeight: "20px",
            fontFamily: "'JetBrains Mono', 'Fira Code', 'SF Mono', 'Consolas', 'Monaco', monospace",
            textShadow: "0 1px 2px rgba(0, 0, 0, 0.2)",
            boxSizing: "border-box",
          }}
          onInput={(e) => {
            const target = e.target as HTMLTextAreaElement;
            
            // If empty, reset to default size
            if (target.value === "") {
              target.style.height = "56px";
              target.style.overflowY = "hidden";
              return;
            }
            
            // Set height to auto to collapse it completely
            target.style.height = "auto";
            
            // Calculate new height based on content
            const newHeight = Math.min(
              Math.max(56, target.scrollHeight),
              200 // Max height
            );
            
            target.style.height = newHeight + "px";
            
            // Enable scrolling only when max height is reached
            if (newHeight >= 200) {
              target.style.overflowY = "auto";
            } else {
              target.style.overflowY = "hidden";
            }
          }}
        />
        
        {/* Search button with 3D effect */}
        <button
          className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 group cursor-pointer"
          style={{
            background:
              "linear-gradient(145deg, rgba(168, 85, 247, 0.3) 0%, rgba(139, 92, 246, 0.25) 50%, rgba(99, 102, 241, 0.2) 100%)",
            boxShadow: `
              0 4px 12px rgba(139, 92, 246, 0.25),
              0 2px 4px rgba(0, 0, 0, 0.2),
              inset 0 1px 0 rgba(255, 255, 255, 0.15),
              inset 0 -1px 0 rgba(0, 0, 0, 0.2)
            `,
            border: "1px solid rgba(168, 85, 247, 0.3)",
            borderTop: "1px solid rgba(168, 85, 247, 0.4)",
            borderBottom: "1px solid rgba(79, 70, 229, 0.2)",
          }}
          onClick={handleButtonClick}
        >
          <svg
            className="w-5 h-5 text-purple-300 group-hover:text-purple-200 transition-colors duration-300"
            style={{
              filter: "drop-shadow(0 0 4px rgba(168, 85, 247, 0.5))"
            }}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}