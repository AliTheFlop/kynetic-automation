"use client";

import { Row, Column } from "@once-ui-system/core";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <Column
      fillWidth
      style={{
        minHeight: "100vh",
        backgroundColor: "var(--midnight)",
        position: "relative",
        overflow: "hidden",
        padding: "20px 24px",
      }}
    >
      {/* Background Texture & Glow */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "100%",
          height: "600px",
          background: "radial-gradient(ellipse at 50% 0%, rgba(24,195,200,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundSize: "24px 24px",
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <Row
        fillWidth
        horizontal="center"
        vertical="center"
        style={{ flex: 1, zIndex: 1, maxWidth: "1200px", margin: "0px auto 60px auto" }}
      >
        <div style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          width: "100%",
          alignItems: "center",
          gap: "60px",
        }}>
          {/* Left Column Copy */}
          <div style={{
            flex: "1 1 50%",
            minWidth: "280px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}>
            {/* Eyebrow */}
            <div style={{
              border: "1px solid rgba(24,195,200,0.4)",
              background: "rgba(24,195,200,0.08)",
              borderRadius: "100px",
              padding: "5px 14px",
              fontFamily: "var(--font-montserrat)",
              fontSize: "12px",
              fontWeight: 600,
              color: "var(--teal)",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: "24px"
            }}>
              AI AUTOMATION FOR SMES
            </div>

            {/* Headline */}
            <h1 style={{
              fontFamily: "var(--font-manrope)",
              fontWeight: 800,
              fontSize: "clamp(40px, 5vw, 68px)",
              color: "var(--bone)",
              lineHeight: 1.1,
              margin: 0,
            }}>
              Never worry about repetitive admin again<span style={{ color: "var(--teal)" }}>.</span>
            </h1>

            {/* Body */}
            <p style={{
              fontFamily: "var(--font-montserrat)",
              fontWeight: 400,
              fontSize: "18px",
              color: "var(--slate)",
              lineHeight: 1.7,
              maxWidth: "480px",
              marginTop: "20px",
              marginBottom: "36px"
            }}>
              We build and manage automations that give your business more output, faster responses, and cleaner follow-ups without adding another person to the payroll.
            </p>

            {/* CTA */}
            <Column gap="12" horizontal="start">
              <Link href="/contact" style={{ textDecoration: 'none', display: 'block' }}>
                <button
                  style={{
                    backgroundColor: "var(--teal)",
                    color: "#0B1320",
                    fontFamily: "var(--font-manrope)",
                    fontWeight: 700,
                    fontSize: "16px",
                    borderRadius: "6px",
                    padding: "14px 28px",
                    letterSpacing: "0.03em",
                    border: "none",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                    boxShadow: "0 0 20px rgba(24,195,200,0)",
                    width: "100%",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = "0 0 24px rgba(24,195,200,0.5)";
                    e.currentTarget.style.filter = "brightness(1.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = "0 0 20px rgba(24,195,200,0)";
                    e.currentTarget.style.filter = "brightness(1)";
                  }}
                >
                  Get in touch
                </button>
              </Link>
              <span style={{
                fontFamily: "var(--font-montserrat)",
                fontSize: "13px",
                color: "var(--slate)",
              }}>
                We'll respond within 48 hours.
              </span>
            </Column>
          </div>

          {/* Right Column Graphic */}
          <div style={{
            flex: "1 1 40%",
            minWidth: "280px",
            position: "relative",
          }}>
            {/* Glow behind card */}
            <div style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "80%",
              height: "80%",
              background: "var(--teal)",
              filter: "blur(100px)",
              opacity: 0.15,
              zIndex: 0,
              pointerEvents: "none",
            }} />

            {/* Glassmorphism Card */}
            <div style={{
              position: "relative",
              zIndex: 1,
              width: "100%",
              aspectRatio: "4/3",
              background: "rgba(36, 52, 71, 0.7)",
              border: "1px solid rgba(24, 195, 200, 0.2)",
              borderRadius: "16px",
              backdropFilter: "blur(12px)",
              boxShadow: "0 0 40px rgba(24, 195, 200, 0.1)",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}>
              {/* Window dots */}
              <div style={{ display: "flex", gap: "8px" }}>
                <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "rgba(255, 95, 86, 0.7)" }} />
                <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "rgba(255, 189, 46, 0.7)" }} />
                <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "rgba(39, 201, 63, 0.7)" }} />
              </div>

              {/* Fake UI elements */}
              <div style={{ width: "40%", height: "24px", background: "rgba(247,248,244,0.1)", borderRadius: "6px", marginTop: "12px" }} />
              <div style={{ width: "100%", height: "48px", background: "rgba(24,195,200,0.05)", borderRadius: "6px", border: "1px dashed rgba(24,195,200,0.2)" }} />
              <div style={{ width: "70%", height: "12px", background: "rgba(247,248,244,0.05)", borderRadius: "4px" }} />
              <div style={{ width: "50%", height: "12px", background: "rgba(247,248,244,0.05)", borderRadius: "4px" }} />

              <div style={{ flex: 1 }} />

              <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <span style={{ color: 'var(--teal)', fontFamily: 'var(--font-mono)', fontSize: '16px', fontWeight: 600 }}>&gt;_ READY</span>
              </div>
            </div>
          </div>
        </div>
      </Row>
    </Column>
  );
}
