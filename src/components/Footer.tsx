"use client";

import { Row } from "@once-ui-system/core";
import Image from "next/image";

export default function Footer() {
  return (
    <Row
      as="footer"
      fillWidth
      paddingX="s"
      horizontal="center"
      vertical="center"
      style={{
        backgroundColor: "var(--midnight)",
        borderTop: "1px solid rgba(24,195,200,0.1)",
        padding: "32px 24px",
      }}
    >
      <Row
        fillWidth
        horizontal="between"
        vertical="center"
        style={{
          maxWidth: "1200px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <Image
            src="/logo-white.svg"
            alt="Kynetic Logo"
            width={100}
            height={26}
          />
        </div>

        <div style={{
          fontFamily: "var(--font-montserrat)",
          fontWeight: 400,
          fontSize: "13px",
          color: "var(--slate)",
        }}>
          ABN: 62 784 011 060
        </div>
      </Row>
    </Row>
  );
}
