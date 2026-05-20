"use client";

import { useState } from "react";
import Image from "next/image";

export default function AgentVideoShowcase() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative w-full max-w-4xl mx-auto"
      style={{ zIndex: 10 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 1. Ambient Glowing Aura Behind Player */}
      <div 
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "110%",
          height: "110%",
          background: "radial-gradient(circle, rgba(24, 195, 200, 0.15) 0%, transparent 70%)",
          filter: "blur(60px)",
          opacity: isHovered ? 1 : 0.6,
          transition: "opacity 0.5s ease",
          pointerEvents: "none",
          zIndex: -1
        }} 
      />

      {/* 2. Main High-Tech Video Container */}
      <div 
        style={{
          position: "relative",
          width: "100%",
          aspectRatio: "16/9",
          backgroundColor: "#050811",
          borderRadius: "16px",
          overflow: "hidden",
          border: isHovered ? "1px solid rgba(24, 195, 200, 0.5)" : "1px solid rgba(24, 195, 200, 0.2)",
          boxShadow: isHovered 
            ? "0 0 35px rgba(24, 195, 200, 0.25), inset 0 0 15px rgba(24, 195, 200, 0.1)" 
            : "0 10px 30px rgba(0, 0, 0, 0.6), inset 0 0 10px rgba(0, 0, 0, 0.5)",
          transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
          transform: isHovered ? "scale(1.01)" : "scale(1)",
        }}
      >
        {/* Style injection for animations */}
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes pulse-ring {
            0% { transform: scale(0.65); opacity: 0; }
            50% { opacity: 0.4; }
            100% { transform: scale(1.3); opacity: 0; }
          }
          @keyframes pulse-dot {
            0%, 100% { transform: scale(1); opacity: 1; box-shadow: 0 0 8px rgba(24, 195, 200, 0.8); }
            50% { transform: scale(1.15); opacity: 0.7; box-shadow: 0 0 15px rgba(24, 195, 200, 0.4); }
          }
          @keyframes pulse-red-dot {
            0%, 100% { transform: scale(1); opacity: 1; box-shadow: 0 0 8px rgba(239, 68, 68, 0.8); }
            50% { transform: scale(1.2); opacity: 0.6; box-shadow: 0 0 15px rgba(239, 68, 68, 0.4); }
          }
          @keyframes bounce-bar-1 { 0%, 100% { height: 4px; } 50% { height: 18px; } }
          @keyframes bounce-bar-2 { 0%, 100% { height: 6px; } 50% { height: 24px; } }
          @keyframes bounce-bar-3 { 0%, 100% { height: 3px; } 50% { height: 14px; } }
          @keyframes bounce-bar-4 { 0%, 100% { height: 8px; } 50% { height: 20px; } }
          @keyframes scanline {
            0% { transform: translateY(-100%); }
            100% { transform: translateY(100%); }
          }
          @keyframes tech-glitch {
            0%, 100% { transform: translate(0); }
            92% { transform: translate(0); }
            93% { transform: translate(1px, -1px); }
            94% { transform: translate(-1px, 1px); }
            95% { transform: translate(0); }
          }
        `}} />

        {!isPlaying ? (
          /* ========================================================
             PRE-PLAY PREMIUM HUD INTERFACE
             ======================================================== */
          <div 
            onClick={() => setIsPlaying(true)}
            style={{ 
              width: "100%", 
              height: "100%", 
              position: "relative", 
              cursor: "pointer" 
            }}
          >
            {/* 2a. Background Image with high-tech overlays */}
            <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
              <Image 
                src="/video_thumbnail.png" 
                alt="AI Agent Video Walkthrough" 
                fill 
                priority
                style={{ 
                  objectFit: "cover", 
                  opacity: isHovered ? 0.35 : 0.25, 
                  filter: "brightness(0.9) contrast(1.1) saturate(0.8)",
                  transition: "all 0.5s ease",
                  transform: isHovered ? "scale(1.025)" : "scale(1)"
                }} 
              />
              {/* Scanline simulation */}
              <div style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to bottom, rgba(24, 195, 200, 0.05) 50%, rgba(0,0,0,0) 50%)",
                backgroundSize: "100% 4px",
                pointerEvents: "none"
              }} />
              {/* Glitchy Scanbar */}
              <div style={{
                position: "absolute",
                left: 0,
                width: "100%",
                height: "100px",
                background: "linear-gradient(to bottom, transparent, rgba(24, 195, 200, 0.08), transparent)",
                animation: "scanline 8s linear infinite",
                pointerEvents: "none"
              }} />
              {/* Vignette Shadow Overlay */}
              <div style={{
                position: "absolute",
                inset: 0,
                background: "radial-gradient(circle, transparent 30%, rgba(5,8,17,0.85) 95%)",
                pointerEvents: "none"
              }} />
            </div>

            {/* ========================================================
               HUD INTERFACE OVERLAYS
               ======================================================== */}
            
            {/* Top HUD Header Bar */}
            <div 
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                padding: "16px 24px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                background: "linear-gradient(to bottom, rgba(5, 8, 17, 0.9) 0%, transparent 100%)",
                borderBottom: "1px solid rgba(255, 255, 255, 0.03)",
                zIndex: 2,
                fontFamily: "var(--font-manrope)",
                letterSpacing: "0.07em",
                fontSize: "11px"
              }}
            >
              {/* Left Live Badge */}
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <div style={{
                  width: "7px",
                  height: "7px",
                  borderRadius: "50%",
                  backgroundColor: "#EF4444",
                  animation: "pulse-red-dot 1.5s infinite"
                }} />
                <span style={{ color: "#E2E8F0", fontWeight: 700 }}>LIVE DEMO FEED</span>
                <span style={{ color: "rgba(255,255,255,0.3)" }}>|</span>
                <span style={{ color: "var(--teal)", fontWeight: 600 }}>ID: 0Gvd5xyMJII</span>
              </div>
              
              {/* Right System Telemetry */}
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span style={{ color: "rgba(255,255,255,0.4)" }}>INFRASTRUCTURE:</span>
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  backgroundColor: "rgba(24, 195, 200, 0.1)",
                  padding: "4px 8px",
                  borderRadius: "4px",
                  border: "1px solid rgba(24, 195, 200, 0.2)",
                }}>
                  <div style={{
                    width: "5px",
                    height: "5px",
                    borderRadius: "50%",
                    backgroundColor: "var(--teal)",
                    animation: "pulse-dot 2s infinite"
                  }} />
                  <span style={{ color: "var(--teal)", fontWeight: 700, fontSize: "10px" }}>ACTIVE</span>
                </div>
              </div>
            </div>

            {/* Left Telemetry Panel */}
            <div 
              style={{
                position: "absolute",
                left: "24px",
                top: "50%",
                transform: "translateY(-50%)",
                display: "flex",
                flexDirection: "column",
                gap: "14px",
                zIndex: 2,
                fontFamily: "var(--font-montserrat)",
                fontSize: "10px",
                color: "rgba(255, 255, 255, 0.4)",
                backgroundColor: "rgba(5, 8, 17, 0.6)",
                backdropFilter: "blur(6px)",
                padding: "16px",
                borderRadius: "8px",
                border: "1px solid rgba(255, 255, 255, 0.05)",
                pointerEvents: "none",
                opacity: isHovered ? 0.95 : 0.65,
                transition: "opacity 0.3s ease",
              }}
            >
              <div>
                <div style={{ color: "rgba(255, 255, 255, 0.25)", fontSize: "8px", fontWeight: 700, textTransform: "uppercase" }}>MODEL COMPILER</div>
                <div style={{ color: "#E2E8F0", fontWeight: 600, marginTop: "2px" }}>KYNETIC-OMNI v1.2</div>
              </div>
              <div>
                <div style={{ color: "rgba(255, 255, 255, 0.25)", fontSize: "8px", fontWeight: 700, textTransform: "uppercase" }}>DATA INTEGRATION</div>
                <div style={{ color: "var(--teal)", fontWeight: 600, marginTop: "2px" }}>RAG PIPELINE / GMAIL</div>
              </div>
              <div>
                <div style={{ color: "rgba(255, 255, 255, 0.25)", fontSize: "8px", fontWeight: 700, textTransform: "uppercase" }}>RESPONSE LATENCY</div>
                <div style={{ color: "#10B981", fontWeight: 600, marginTop: "2px" }}>&lt; 74ms (STABLE)</div>
              </div>
              <div style={{ width: "100px", height: "1px", backgroundColor: "rgba(255, 255, 255, 0.08)" }} />
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span>SYS CAP:</span>
                <span style={{ color: "#E2E8F0", fontWeight: 600 }}>100%</span>
              </div>
            </div>

            {/* Right Telemetry / Visualizer Panel */}
            <div 
              style={{
                position: "absolute",
                right: "24px",
                top: "50%",
                transform: "translateY(-50%)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "16px",
                zIndex: 2,
                backgroundColor: "rgba(5, 8, 17, 0.6)",
                backdropFilter: "blur(6px)",
                padding: "16px 12px",
                borderRadius: "8px",
                border: "1px solid rgba(255, 255, 255, 0.05)",
                pointerEvents: "none",
                opacity: isHovered ? 0.95 : 0.65,
                transition: "opacity 0.3s ease",
              }}
            >
              <div style={{
                writingMode: "vertical-rl",
                textTransform: "uppercase",
                fontFamily: "var(--font-manrope)",
                fontSize: "8px",
                fontWeight: 700,
                letterSpacing: "0.15em",
                color: "rgba(255, 255, 255, 0.3)"
              }}>
                Audio Stream
              </div>

              {/* CSS Animated Audio Waveform */}
              <div style={{
                display: "flex",
                alignItems: "flex-end",
                gap: "3px",
                height: "26px",
                width: "25px",
                justifyContent: "center"
              }}>
                <div style={{ width: "3px", backgroundColor: "var(--teal)", borderRadius: "2px", animation: isHovered ? "bounce-bar-1 0.7s infinite" : "none", height: "8px" }} />
                <div style={{ width: "3px", backgroundColor: "var(--teal)", borderRadius: "2px", animation: isHovered ? "bounce-bar-2 0.9s infinite" : "none", height: "14px" }} />
                <div style={{ width: "3px", backgroundColor: "var(--teal)", borderRadius: "2px", animation: isHovered ? "bounce-bar-3 0.6s infinite" : "none", height: "10px" }} />
                <div style={{ width: "3px", backgroundColor: "var(--teal)", borderRadius: "2px", animation: isHovered ? "bounce-bar-4 0.8s infinite" : "none", height: "6px" }} />
              </div>
            </div>

            {/* Center Play Button Hub */}
            <div 
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "20px",
                zIndex: 3,
                textAlign: "center"
              }}
            >
              {/* Play Trigger Circles */}
              <div style={{ position: "relative", width: "90px", height: "90px" }}>
                {/* 3 Ripple circles */}
                <div style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: "50%",
                  border: "2px solid var(--teal)",
                  animation: "pulse-ring 2.2s cubic-bezier(0.215, 0.61, 0.355, 1) infinite"
                }} />
                <div style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: "50%",
                  border: "2px solid var(--teal)",
                  animation: "pulse-ring 2.2s cubic-bezier(0.215, 0.61, 0.355, 1) infinite",
                  animationDelay: "0.7s"
                }} />
                <div style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: "50%",
                  border: "2px solid var(--teal)",
                  animation: "pulse-ring 2.2s cubic-bezier(0.215, 0.61, 0.355, 1) infinite",
                  animationDelay: "1.4s"
                }} />

                {/* Main Play Circle */}
                <div 
                  style={{
                    position: "absolute",
                    inset: "6px",
                    backgroundColor: "rgba(11, 19, 32, 0.8)",
                    backdropFilter: "blur(8px)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: isHovered ? "2px solid var(--teal)" : "2px solid rgba(24, 195, 200, 0.6)",
                    boxShadow: isHovered 
                      ? "0 0 30px rgba(24, 195, 200, 0.6), inset 0 0 15px rgba(24, 195, 200, 0.2)" 
                      : "0 0 20px rgba(0, 0, 0, 0.5)",
                    transition: "all 0.3s ease",
                    transform: isHovered ? "scale(1.05)" : "scale(1)"
                  }}
                >
                  <svg 
                    width="26" 
                    height="26" 
                    viewBox="0 0 24 24" 
                    fill="var(--bone)" 
                    style={{ 
                      marginLeft: "4px",
                      filter: isHovered ? "drop-shadow(0 0 8px rgba(255,255,255,0.8))" : "none",
                      transition: "all 0.3s ease"
                    }}
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>

              {/* Title & Length */}
              <div 
                style={{
                  fontFamily: "var(--font-manrope)",
                  animation: "tech-glitch 12s infinite"
                }}
              >
                <div style={{
                  color: "var(--bone)",
                  fontWeight: 800,
                  fontSize: "14px",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  textShadow: "0 2px 10px rgba(0,0,0,0.5)"
                }}>
                  Initiate System Demo
                </div>
                <div style={{
                  color: "var(--teal)",
                  fontWeight: 600,
                  fontSize: "11px",
                  letterSpacing: "0.1em",
                  marginTop: "4px"
                }}>
                  RUNTIME: 01:55 // WITH AUDIO 🔊
                </div>
              </div>
            </div>

            {/* Bottom HUD Timeline Bar */}
            <div 
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%",
                padding: "16px 24px",
                background: "linear-gradient(to top, rgba(5, 8, 17, 0.95) 0%, transparent 100%)",
                borderTop: "1px solid rgba(255, 255, 255, 0.03)",
                zIndex: 2,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                fontFamily: "var(--font-montserrat)",
                fontSize: "10px",
                color: "rgba(255, 255, 255, 0.35)",
                pointerEvents: "none"
              }}
            >
              <div style={{ display: "flex", gap: "16px" }}>
                <span><strong style={{ color: "var(--bone)" }}>[00:00]</strong> SETUP</span>
                <span><strong style={{ color: "var(--bone)" }}>[00:30]</strong> KNOWLEDGE RAG</span>
                <span><strong style={{ color: "var(--bone)" }}>[01:05]</strong> GMAIL DEMO</span>
                <span><strong style={{ color: "var(--bone)" }}>[01:40]</strong> WRAP-UP</span>
              </div>
              <span style={{ fontFamily: "var(--font-manrope)", fontSize: "9px", letterSpacing: "0.05em" }}>SECURE STREAM</span>
            </div>

          </div>
        ) : (
          /* ========================================================
             ACTIVE STREAMING YOUTUBE PLAYER
             ======================================================== */
          <div 
            style={{ 
              width: "100%", 
              height: "100%", 
              animation: "fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards" 
            }}
          >
            <style dangerouslySetInnerHTML={{ __html: `
              @keyframes fadeIn {
                from { opacity: 0; transform: scale(0.98); }
                to { opacity: 1; transform: scale(1); }
              }
            `}} />
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/0Gvd5xyMJII?autoplay=1&rel=0&modestbranding=1&controls=1&showinfo=0"
              title="Kynetic Custom AI Support Agent Walkthrough"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              style={{
                border: "none",
                borderRadius: "16px",
                backgroundColor: "#000"
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
