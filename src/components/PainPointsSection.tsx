"use client";

import { Row, Column } from "@once-ui-system/core";
import { ReactNode } from "react";

const painPoints = [
  {
    title: "Missed Enquiries",
    body: "Calls and messages that go cold before anyone gets to them",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        <line x1="14" y1="2" x2="22" y2="10"></line>
        <line x1="18" y1="2" x2="22" y2="6"></line>
        <line x1="14" y1="6" x2="18" y2="10"></line>
      </svg>
    )
  },
  {
    title: "Slow Responses",
    body: "Leads are won by whoever replies first",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 6 12 12 16 14"></polyline>
      </svg>
    )
  },
  {
    title: "Dropped Follow Ups",
    body: "Warm prospects forgotten in the daily chaos",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
      </svg>
    )
  },
  {
    title: "Broken Handoffs",
    body: "Information stuck in someone's inbox instead of where it belongs",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
      </svg>
    )
  },
  {
    title: "Repeated Admin",
    body: "The same reminder, update, and data entry every single week",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
        <line x1="16" y1="2" x2="16" y2="6"></line>
        <line x1="8" y1="2" x2="8" y2="6"></line>
        <line x1="3" y1="10" x2="21" y2="10"></line>
      </svg>
    )
  },
  {
    title: "Context Switching",
    body: "Getting out of real work to handle small basic things",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
        <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
        <line x1="12" y1="22.08" x2="12" y2="12"></line>
      </svg>
    )
  }
];

export default function PainPointsSection() {
  return (
    <Column
      fillWidth
      style={{
        backgroundColor: "var(--bone)",
        padding: "100px 24px",
      }}
      horizontal="center"
    >
      <Column
        horizontal="center"
        style={{
          maxWidth: "1200px",
          width: "100%",
        }}
      >
        {/* Header */}
        <Column horizontal="center" gap="8">
          <h2 style={{
            fontFamily: "var(--font-manrope)",
            fontWeight: 800,
            fontSize: "clamp(28px, 3.5vw, 48px)",
            color: "var(--midnight)",
            margin: 0,
            textAlign: "center"
          }}>
            You're not short on ambition.
          </h2>
          <p style={{
            fontFamily: "var(--font-montserrat)",
            fontWeight: 500,
            fontSize: "18px",
            color: "var(--slate)",
            margin: 0,
            textAlign: "center"
          }}>
            But you <em style={{ fontStyle: "italic" }}>are</em> short on capacity...
          </p>
        </Column>

        {/* Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "24px",
          marginTop: "56px",
          width: "100%"
        }}>
          {painPoints.map((point, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "#FFFFFF",
                border: "1px solid #E4E6E1",
                borderRadius: "12px",
                padding: "28px 24px",
                transition: "all 0.25s ease",
                cursor: "default"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(24,195,200,0.4)";
                e.currentTarget.style.boxShadow = "0 4px 24px rgba(24,195,200,0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#E4E6E1";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div style={{
                width: "44px",
                height: "44px",
                backgroundColor: "rgba(24,195,200,0.08)",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--teal)"
              }}>
                {point.icon}
              </div>
              <h3 style={{
                fontFamily: "var(--font-manrope)",
                fontWeight: 700,
                fontSize: "16px",
                color: "var(--midnight)",
                marginTop: "16px",
                marginBottom: "0"
              }}>
                {point.title}
              </h3>
              <p style={{
                fontFamily: "var(--font-montserrat)",
                fontWeight: 400,
                fontSize: "14px",
                color: "var(--slate)",
                lineHeight: 1.6,
                marginTop: "6px",
                marginBottom: "0"
              }}>
                {point.body}
              </p>
            </div>
          ))}
        </div>
      </Column>
    </Column>
  );
}
