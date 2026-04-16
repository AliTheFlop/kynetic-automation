"use client";

import { Row, Column } from "@once-ui-system/core";

const failedSolutions = [
  {
    title: "DIY Automation",
    body: "You built a few flows over a week, but they broke and you didn't notice for three days.",
    icon: (
      <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="var(--teal)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.8 }}>
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
        <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
        <line x1="6" y1="6" x2="6.01" y2="6"></line>
        <line x1="6" y1="18" x2="6.01" y2="18"></line>
        <path d="M12 10v4" strokeDasharray="2 2"></path>
        <line x1="2" y1="2" x2="22" y2="22" stroke="#FF5F56" strokeWidth="1.5" style={{ opacity: 0.5 }}></line>
      </svg>
    )
  },
  {
    title: "Hiring a VA",
    body: "Maybe you hired a VA. They helped until you realised you were spending an hour a day managing someone whose job was to save you time.",
    icon: (
      <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="var(--teal)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.8 }}>
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
        <circle cx="12" cy="7" r="4"></circle>
        <path d="M16 11l4-4M16 7l4 4" stroke="#FF5F56" strokeWidth="1.5" style={{ opacity: 0.5 }}></path>
      </svg>
    )
  },
  {
    title: "All In One Platforms",
    body: "Maybe you looked at a platform that promised to fix everything... but that got expensive quick!",
    icon: (
      <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="var(--teal)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.8 }}>
        <rect x="3" y="3" width="7" height="7"></rect>
        <rect x="14" y="3" width="7" height="7"></rect>
        <rect x="14" y="14" width="7" height="7"></rect>
        <rect x="3" y="14" width="7" height="7"></rect>
        <circle cx="12" cy="12" r="8" stroke="#FF5F56" strokeWidth="1.5" style={{ opacity: 0.5 }}></circle>
        <line x1="6" y1="6" x2="18" y2="18" stroke="#FF5F56" strokeWidth="1.5" style={{ opacity: 0.5 }}></line>
      </svg>
    )
  }
];

export default function FailedSolutionsSection() {
  return (
    <Column
      fillWidth
      style={{
        backgroundColor: "var(--midnight)",
        padding: "100px 24px",
        position: "relative",
        overflow: "hidden"
      }}
      horizontal="center"
    >
      {/* Texture & Glow */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "100%",
          height: "600px",
          background: "radial-gradient(ellipse at 50% 0%, rgba(24,195,200,0.06) 0%, transparent 60%)",
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
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <Column
        horizontal="center"
        style={{
          maxWidth: "1200px",
          width: "100%",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Header */}
        <Column horizontal="center">
          <h2 style={{
            fontFamily: "var(--font-manrope)",
            fontWeight: 800,
            fontSize: "clamp(26px, 3vw, 44px)",
            color: "var(--bone)",
            margin: 0,
            textAlign: "center"
          }}>
            You've probably already tried to solve this.
          </h2>
          <p style={{
            fontFamily: "var(--font-montserrat)",
            fontWeight: 400,
            fontSize: "17px",
            color: "var(--slate)",
            maxWidth: "560px",
            margin: "12px auto 0",
            textAlign: "center",
            lineHeight: 1.6
          }}>
            The problem is that patching a manual business with more tools doesn't remove the manual dependency
          </p>
        </Column>

        {/* Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "24px",
          marginTop: "56px",
          width: "100%"
        }}>
          {failedSolutions.map((solution, index) => (
            <div
              key={index}
              style={{
                background: "rgba(36,52,71,0.5)",
                border: "1px solid rgba(24,195,200,0.15)",
                borderRadius: "14px",
                padding: "36px 28px",
                backdropFilter: "blur(10px)",
                transition: "all 0.3s ease",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                cursor: "default",
                position: "relative"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(24,195,200,0.4)";
                e.currentTarget.style.boxShadow = "0 0 30px rgba(24,195,200,0.12)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(24,195,200,0.15)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div style={{
                position: "absolute",
                top: "16px",
                right: "16px",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "var(--slate)",
                fontSize: "10px",
                fontFamily: "var(--font-montserrat)",
                padding: "4px 8px",
                borderRadius: "100px",
                textTransform: "uppercase",
                letterSpacing: "0.05em"
              }}>
                Doesn't work
              </div>
              <div style={{ marginBottom: "20px" }}>
                {solution.icon}
              </div>
              <h3 style={{
                fontFamily: "var(--font-manrope)",
                fontWeight: 700,
                fontSize: "18px",
                color: "var(--bone)",
                margin: "0"
              }}>
                {solution.title}
              </h3>
              <p style={{
                fontFamily: "var(--font-montserrat)",
                fontWeight: 400,
                fontSize: "14px",
                color: "var(--slate)",
                lineHeight: 1.65,
                marginTop: "10px",
                marginBottom: "0"
              }}>
                {solution.body}
              </p>
            </div>
          ))}
        </div>
      </Column>
    </Column>
  );
}
