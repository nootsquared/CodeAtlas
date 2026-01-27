"use client";

import { EncryptedText } from "@/components/ui/encrypted-text";

export default function Header() {
  return (
    <div className="relative flex flex-col items-center justify-center">
      {/* Outer glow effect - larger and more prominent */}
      <div
        className="absolute -inset-8 rounded-3xl blur-3xl opacity-50 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(168, 85, 247, 0.4) 0%, rgba(139, 92, 246, 0.25) 30%, rgba(99, 102, 241, 0.15) 50%, transparent 70%)",
        }}
      />

      {/* 3D Shadow layers for depth */}
      <div
        className="absolute inset-0 rounded-2xl"
        style={{
          transform: "translateY(8px) translateX(4px)",
          background: "rgba(0, 0, 0, 0.5)",
          filter: "blur(12px)",
        }}
      />
      <div
        className="absolute inset-0 rounded-2xl"
        style={{
          transform: "translateY(4px) translateX(2px)",
          background: "rgba(79, 70, 229, 0.15)",
          filter: "blur(8px)",
        }}
      />

      {/* Background box container - enhanced 3D effect */}
      <div
        className="relative flex flex-col items-center justify-center gap-4 px-14 py-12 rounded-2xl backdrop-blur-md"
        style={{
          background:
            "linear-gradient(145deg, rgba(25, 20, 40, 0.95) 0%, rgba(15, 12, 25, 0.98) 50%, rgba(10, 8, 18, 0.99) 100%)",
          boxShadow: `
            0 25px 50px -12px rgba(0, 0, 0, 0.6),
            0 12px 24px -8px rgba(0, 0, 0, 0.4),
            0 0 60px rgba(139, 92, 246, 0.15),
            0 0 30px rgba(168, 85, 247, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.08),
            inset 0 -1px 0 rgba(0, 0, 0, 0.3),
            inset 1px 0 0 rgba(255, 255, 255, 0.03),
            inset -1px 0 0 rgba(0, 0, 0, 0.2)
          `,
          border: "1px solid rgba(139, 92, 246, 0.2)",
          borderTop: "1px solid rgba(168, 85, 247, 0.3)",
          borderBottom: "1px solid rgba(79, 70, 229, 0.15)",
        }}
      >
        {/* Inner highlight edge */}
        <div
          className="absolute inset-[1px] rounded-2xl pointer-events-none"
          style={{
            background: "linear-gradient(180deg, rgba(255,255,255,0.05) 0%, transparent 30%, transparent 70%, rgba(0,0,0,0.1) 100%)",
          }}
        />

        {/* Decorative corner accents - more visible */}
        <div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-purple-400/50 rounded-tl-2xl" />
        <div className="absolute top-0 right-0 w-10 h-10 border-t-2 border-r-2 border-purple-400/50 rounded-tr-2xl" />
        <div className="absolute bottom-0 left-0 w-10 h-10 border-b-2 border-l-2 border-purple-400/50 rounded-bl-2xl" />
        <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-purple-400/50 rounded-br-2xl" />

        {/* Terminal-style top bar with better styling */}
        <div className="absolute top-4 left-5 flex gap-2">
          <div 
            className="w-3 h-3 rounded-full"
            style={{
              background: "linear-gradient(135deg, #ff6b6b 0%, #ee5a5a 100%)",
              boxShadow: "0 0 6px rgba(255, 107, 107, 0.5), inset 0 1px 0 rgba(255,255,255,0.3)"
            }}
          />
          <div 
            className="w-3 h-3 rounded-full"
            style={{
              background: "linear-gradient(135deg, #ffd93d 0%, #f0c929 100%)",
              boxShadow: "0 0 6px rgba(255, 217, 61, 0.5), inset 0 1px 0 rgba(255,255,255,0.3)"
            }}
          />
          <div 
            className="w-3 h-3 rounded-full"
            style={{
              background: "linear-gradient(135deg, #6bcf6b 0%, #5ac05a 100%)",
              boxShadow: "0 0 6px rgba(107, 207, 107, 0.5), inset 0 1px 0 rgba(255,255,255,0.3)"
            }}
          />
        </div>

        {/* Main title with encrypted text effect */}
        <h1
          className="relative text-5xl font-bold tracking-tight mt-5"
          style={{
            fontFamily:
              "'JetBrains Mono', 'Fira Code', 'SF Mono', 'Consolas', monospace",
            textShadow: "0 0 40px rgba(168, 85, 247, 0.5), 0 2px 4px rgba(0, 0, 0, 0.3)",
          }}
        >
          <span className="text-purple-400/70 mr-2">&gt;</span>
          <EncryptedText
            text="CodeAtlas"
            encryptedClassName="text-purple-400/50"
            revealedClassName="text-white"
            revealDelayMs={60}
          />
          <span 
            className="inline-block w-3 h-8 ml-1 animate-pulse rounded-sm"
            style={{
              background: "linear-gradient(180deg, rgba(168, 85, 247, 0.9) 0%, rgba(139, 92, 246, 0.7) 100%)",
              boxShadow: "0 0 15px rgba(168, 85, 247, 0.6)"
            }}
          />
        </h1>

        {/* Subtitle */}
        <p
          className="relative text-base text-center max-w-md tracking-wide"
          style={{
            fontFamily:
              "'JetBrains Mono', 'Fira Code', 'SF Mono', 'Consolas', monospace",
            textShadow: "0 1px 2px rgba(0, 0, 0, 0.3)",
          }}
        >
          <span className="text-gray-500 mr-2">//</span>
          <EncryptedText
            text="AI-Powered Code Visualization"
            encryptedClassName="text-gray-600"
            revealedClassName="text-gray-400"
            revealDelayMs={35}
          />
        </p>
      </div>
    </div>
  );
}