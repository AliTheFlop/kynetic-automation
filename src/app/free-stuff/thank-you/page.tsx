"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Column } from "@once-ui-system/core";
import Link from "next/link";

export default function FreeStuffThankYouPage() {
  return (
    <Column
      fillWidth
      style={{
        backgroundColor: "var(--midnight)",
        minHeight: "100vh",
      }}
    >
      <Navbar />

      <Column
        fillWidth
        fillHeight
        horizontal="center"
        vertical="center"
        style={{
          padding: "120px 24px",
          flex: 1,
        }}
      >
        <Column
          gap="32"
          horizontal="center"
          style={{
            maxWidth: "600px",
            textAlign: "center"
          }}
        >
          {/* Glowing Checkmark */}
          <div style={{
            position: "relative",
            width: "80px",
            height: "80px",
            marginBottom: "16px"
          }}>
            <div style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "100%",
              height: "100%",
              backgroundColor: "var(--teal)",
              filter: "blur(40px)",
              opacity: 0.3,
              borderRadius: "50%",
            }} />
            <div style={{
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              backgroundColor: "rgba(24,195,200,0.1)",
              border: "1px solid rgba(24,195,200,0.3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--teal)",
              position: "relative",
              zIndex: 1
            }}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
          </div>

          <Column gap="16" horizontal="center">
            <h1 style={{
              fontFamily: "var(--font-manrope)",
              fontWeight: 800,
              fontSize: "clamp(36px, 5vw, 54px)",
              color: "var(--bone)",
              lineHeight: 1.15,
              margin: 0
            }}>
              Thank You!
            </h1>
            <p style={{
              fontFamily: "var(--font-montserrat)",
              fontWeight: 400,
              fontSize: "18px",
              lineHeight: 1.6,
              color: "var(--slate)",
              margin: 0
            }}>
              You will receive the guide by email within the next 5 minutes. If you haven't received it after 24 hours, please contact <strong>ali@kynetic.one</strong> and we'll be happy to assist.
            </p>
          </Column>

          <Link href="/" style={{ textDecoration: 'none', display: 'inline-block', marginTop: "16px" }}>
            <button
              style={{
                backgroundColor: "transparent",
                color: "var(--bone)",
                fontFamily: "var(--font-manrope)",
                fontWeight: 700,
                fontSize: "16px",
                borderRadius: "8px",
                padding: "14px 28px",
                letterSpacing: "0.02em",
                border: "1px solid rgba(255,255,255,0.1)",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.05)";
                e.currentTarget.style.border = "1px solid rgba(255,255,255,0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.border = "1px solid rgba(255,255,255,0.1)";
              }}
            >
              Return Home
            </button>
          </Link>
        </Column>
      </Column>

      <Footer />
    </Column>
  );
}
