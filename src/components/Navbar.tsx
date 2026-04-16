"use client";

import Image from "next/image";
import Link from "next/link";
import { Row, Column, Text } from "@once-ui-system/core";

export default function Navbar() {
  return (
    <Row
      as="nav"
      position="sticky"
      fillWidth
      paddingX="s"
      horizontal="center"
      center
      style={{
        height: "var(--navbar-height, 68px)",
        backgroundColor: "rgba(11, 19, 32, 0.85)", // --midnight with some transparency for blur
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(24, 195, 200, 0.12)",
        top: 0,
        zIndex: 50,
      }}
    >
      <Row
        fillWidth
        horizontal="between"
        vertical="center"
        style={{
          maxWidth: "1200px",
          padding: "0 24px",
        }}
      >
        <Column horizontal="center">
          <Link href="/">
            <Image
              src="/logo-white.svg"
              alt="Kynetic Logo"
              width={120}
              height={32}
              priority
              style={{ cursor: "pointer" }}
            />
          </Link>
        </Column>

        <Row gap="24" vertical="center" horizontal="center">
          <Link href="/blog" style={{ textDecoration: 'none' }}>
            <Text 
              variant="body-default-m" 
              style={{ color: 'var(--neutral-on-background-strong)', fontWeight: 500 }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = 'var(--brand-solid-strong)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = 'var(--neutral-on-background-strong)';
              }}
            >
              Blog
            </Text>
          </Link>
          <Link href="/contact" style={{ textDecoration: 'none' }}>
            <button
              style={{
                backgroundColor: "var(--teal)",
                color: "#0B1320",
                fontFamily: "var(--font-manrope)",
                fontWeight: 700,
                borderRadius: "6px",
                padding: "8px 16px",
                letterSpacing: "0.03em",
                border: "none",
                cursor: "pointer",
                whiteSpace: "nowrap",
                transition: "all 0.2s ease",
                boxShadow: "0 0 20px rgba(24,195,200,0)",
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
        </Row>
      </Row>
    </Row>
  );
}
