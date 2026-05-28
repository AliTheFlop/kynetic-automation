"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { Column } from "@once-ui-system/core";

export default function ContactSection() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"discovery-call"});
      cal("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, [])

  return (
    <Column
      id="book-a-call"
      fillWidth
      horizontal="center"
      style={{
        backgroundColor: "var(--bone)",
        padding: "100px 24px",
      }}
    >
      <Column
        gap="32"
        horizontal="center"
        style={{
          maxWidth: "1200px",
          width: "100%"
        }}
      >
        <Column gap="16" horizontal="center" style={{ textAlign: "center", marginBottom: "24px" }}>
          <h2 style={{
            fontFamily: "var(--font-manrope)",
            fontWeight: 800,
            fontSize: "clamp(32px, 4vw, 48px)",
            color: "var(--midnight)",
            margin: 0
          }}>
            Let's See if We're a Good Fit.
          </h2>
          <p style={{
            fontFamily: "var(--font-montserrat)",
            fontWeight: 500,
            fontSize: "18px",
            color: "var(--slate)",
            maxWidth: "600px",
            margin: 0
          }}>
            Book a call below. We'll have an honest look at whether we can actually help your business.
          </p>
        </Column>

        <div style={{ width: "100%", height: "700px", borderRadius: "16px", overflow: "hidden", background: "#FFFFFF", border: "1px solid #E4E6E1", boxShadow: "0 12px 60px rgba(11,19,32,0.06)" }}>
          <Cal namespace="discovery-call"
            calLink="kynetic/discovery-call"
            style={{width:"100%",height:"100%",overflow:"scroll"}}
            config={{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}}
          />
        </div>
      </Column>
    </Column>
  );
}
