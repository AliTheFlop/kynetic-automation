"use client";

import { Column, Row, Heading, Text } from "@once-ui-system/core";
import Footer from "@/components/Footer";
import { useState, Suspense } from "react";
import { submitContactForm } from "@/app/actions";
import { useRouter, useSearchParams } from "next/navigation";
import { generateId, getExternalId, getTrackingCookie } from "@/utils/tracking";
import Image from "next/image";
import Link from "next/link";

function MetaAdsTipsContent() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | string>("idle");
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const router = useRouter();
  const searchParams = useSearchParams();

  const businessTypeParam = searchParams.get("UTM_BusinessType")?.toLowerCase();

  const businessTypeMap: Record<string, string> = {
    realestateagents: "Real Estate Agents",
    ecommerceagencies: "E-Commerce Agencies",
    privatetutors: "Private Tutors",
    personaltrainers: "Personal Trainers",
  };

  const businessType = businessTypeParam ? businessTypeMap[businessTypeParam] : null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const formElement = e.currentTarget;
    const formData = new FormData(formElement);
    const data = Object.fromEntries(formData.entries());

    // Generate unique Event and External IDs
    const eventId = generateId();

    // Tag where the lead came from
    data.source = "lead_magnet_meta_ads_tips";
    data.event_id = eventId;
    data.external_id = getExternalId();
    data.fbp = getTrackingCookie("_fbp") || "";
    data.fbc = getTrackingCookie("_fbc") || "";

    if (businessType) {
      data.business_type = businessType;
    }

    try {
      const res = await submitContactForm(data);

      if (res.success) {
        setSubmitStatus("success");
        formElement.reset();

        // Track Facebook Pixel Lead Event with Advanced Matching & Deduplication
        if (typeof window !== 'undefined' && (window as any).fbq) {
          if (data.email) {
            (window as any).fbq('init', '24622388897460037', { em: data.email, external_id: data.external_id });
          }
          (window as any).fbq('track', 'Lead', {}, { eventID: eventId });
        }

        router.push("/meta-ads-tips/thank-you");
      } else {
        setSubmitStatus(`Error: ${res.error}`);
      }
    } catch (error: any) {
      setSubmitStatus(`Error: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputStyle = (id: string) => ({
    width: "100%",
    backgroundColor: "#0A0F17", // Dark theme input
    border: focusedField === id ? "1px solid var(--teal)" : "1px solid rgba(255,255,255,0.05)",
    borderRadius: "8px",
    padding: "16px",
    fontFamily: "var(--font-montserrat)",
    fontSize: "14px",
    color: "var(--bone)",
    outline: "none",
    boxShadow: focusedField === id ? "0 0 0 3px rgba(24,195,200,0.15)" : "none",
    transition: "all 0.2s ease"
  });

  const labelStyle = {
    display: "block",
    fontFamily: "var(--font-montserrat)",
    fontWeight: 600,
    fontSize: "13px",
    color: "#E2E8F0",
    marginBottom: "8px"
  };

  return (
    <Column fillWidth fillHeight>
      <Row
        as="header"
        fillWidth
        paddingX="s"
        horizontal="center"
        vertical="center"
        style={{
          height: "68px",
          backgroundColor: "rgba(11, 19, 32, 0.85)",
          borderBottom: "1px solid rgba(24, 195, 200, 0.12)",
        }}
      >
        <div style={{ display: "flex" }}>
          <Image
            src="/logo-white.svg"
            alt="Kynetic Logo"
            width={100}
            height={26}
            priority
          />
        </div>
      </Row>

      <Column
        as="main"
        fillWidth
        paddingX="l"
        paddingY="128"
        horizontal="center"
        style={{ flex: 1, backgroundColor: "var(--midnight)" }}
      >
        <Column maxWidth="m" fillWidth gap="48" horizontal="center">
          <Column gap="24" horizontal="center" style={{ textAlign: "center" }}>
            {businessType && (
              <Text variant="body-strong-m" style={{ color: "var(--teal)", textTransform: "uppercase", letterSpacing: "1px" }}>
                For {businessType}
              </Text>
            )}
            <Heading variant="display-strong-m" style={{ color: "var(--bone)" }}>
              3 Tips To Get Better Results Using Meta Ads (+ A Bonus Trick)
            </Heading>
            <Text variant="body-default-l" style={{ color: "var(--slate)", maxWidth: "600px" }}>
              This guide includes 3 real-world actionable tips that you can implement <strong style={{ color: "var(--bone)" }}>today</strong> to improve your Meta Ads and get more results.
            </Text>
          </Column>

          <form
            style={{
              width: "100%",
              maxWidth: "500px",
              backgroundColor: "#121A26",
              border: "1px solid rgba(24,195,200,0.1)",
              borderRadius: "20px",
              padding: "40px 24px",
              boxShadow: "0 24px 80px rgba(0,0,0,0.5)",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              textAlign: "left"
            }}
            onSubmit={handleSubmit}
          >
            <div>
              <label htmlFor="firstName" style={labelStyle}>Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="Name"
                required
                style={inputStyle("firstName")}
                onFocus={() => setFocusedField("firstName")}
                onBlur={() => setFocusedField(null)}
              />
            </div>

            <div>
              <label htmlFor="email" style={labelStyle}>Work Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="you@company.com"
                required
                style={inputStyle("email")}
                onFocus={() => setFocusedField("email")}
                onBlur={() => setFocusedField(null)}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting || submitStatus === "success"}
              style={{
                width: "100%",
                backgroundColor: submitStatus === "success" ? "#10B981" : "var(--teal)",
                color: "#0B1320",
                fontFamily: "var(--font-manrope)",
                fontWeight: 800,
                fontSize: "16px",
                borderRadius: "8px",
                padding: "16px 28px",
                border: "none",
                cursor: (isSubmitting || submitStatus === "success") ? "default" : "pointer",
                transition: "all 0.2s ease",
                marginTop: "16px",
                boxShadow: submitStatus === "success" ? "0 0 20px rgba(16,185,129,0.3)" : "0 0 20px rgba(24,195,200,0)",
              }}
              onMouseEnter={(e) => {
                if (isSubmitting || submitStatus === "success") return;
                e.currentTarget.style.filter = "brightness(1.05)";
              }}
              onMouseLeave={(e) => {
                if (isSubmitting || submitStatus === "success") return;
                e.currentTarget.style.filter = "brightness(1)";
              }}
            >
              {isSubmitting ? "Sending..." : submitStatus === "success" ? "Guide Sent!" : "Get the Free Guide"}
            </button>

            {submitStatus !== "idle" && submitStatus !== "success" && (
              <div style={{ color: "#EF4444", fontSize: "14px", textAlign: "center", marginTop: "8px", fontFamily: "var(--font-montserrat)" }}>
                Failed to sign up. {submitStatus}
              </div>
            )}
          </form>

          <Column style={{ maxWidth: "700px", width: "100%", marginTop: "64px", padding: "0 24px" }} gap="32" horizontal="center">
            <Column gap="8" horizontal="center" style={{ textAlign: "center" }}>
              <Text variant="body-strong-s" style={{ color: "var(--teal)", textTransform: "uppercase", letterSpacing: "2px" }}>
                What&apos;s inside
              </Text>
              <Heading variant="heading-strong-xl" style={{ color: "var(--bone)" }}>
                6 actionable strategies you can use today
              </Heading>
            </Column>

            <Column gap="16" fillWidth>
              {[
                "What business types Meta Ads works best for (and who should be running something else entirely)",
                "The best way to use Meta Ad Library to pull unlimited creative ideas from outside markets",
                "The reason why your ads go from the best week ever, to the worst week ever with zero warning",
                "Why most businesses leave a huge chunk of leads on the table by skipping this one simple campaign type",
                "The 3-metric method for knowing when to rotate your creatives (and when to leave them alone)",
                "How to recreate a competitor's best-performing static ad in 30 seconds"
              ].map((text, i) => (
                <Row
                  key={i}
                  fillWidth
                  vertical="center"
                  gap="20"
                  style={{
                    backgroundColor: "#121A26",
                    border: "1px solid rgba(24,195,200,0.15)",
                    borderRadius: "16px",
                    padding: "20px 24px",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.2)"
                  }}
                >
                  <div style={{
                    minWidth: "28px",
                    height: "28px",
                    borderRadius: "50%",
                    backgroundColor: "var(--teal)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    boxShadow: "0 0 12px rgba(24,195,200,0.4)"
                  }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0B1320" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <Text variant="body-default-m" style={{ color: "var(--bone)", lineHeight: "1.5" }}>
                    {text}
                  </Text>
                </Row>
              ))}
            </Column>
          </Column>
        </Column>
      </Column>

      <Footer />
    </Column>
  );
}

export default function MetaAdsTipsPage() {
  return (
    <Suspense fallback={
      <Column fillWidth fillHeight horizontal="center" vertical="center" style={{ backgroundColor: "var(--midnight)" }}>
        <Text variant="body-default-m" style={{ color: "var(--bone)" }}>Loading...</Text>
      </Column>
    }>
      <MetaAdsTipsContent />
    </Suspense>
  );
}
