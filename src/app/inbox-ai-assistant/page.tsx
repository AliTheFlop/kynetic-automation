"use client";

import { Column, Row, Heading, Text } from "@once-ui-system/core";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { submitContactForm } from "@/app/actions";
import { useRouter } from "next/navigation";
import { generateId, getExternalId, getTrackingCookie } from "@/utils/tracking";

export default function InboxAIAssistantPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | string>("idle");
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const router = useRouter();

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
    data.source = "lead_magnet_inbox_ai_assistant";
    data.event_id = eventId;
    data.external_id = getExternalId();
    data.fbp = getTrackingCookie("_fbp") || "";
    data.fbc = getTrackingCookie("_fbc") || "";

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

        router.push("/inbox-ai-assistant/thank-you");
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
      <Navbar />

      <Column
        as="main"
        fillWidth
        paddingX="l"
        paddingY="128"
        horizontal="center"
        style={{ flex: 1, backgroundColor: "var(--midnight)" }}
      >
        <Column maxWidth="m" fillWidth gap="48" horizontal="center" style={{ textAlign: "center" }}>
          <Column gap="24" horizontal="center">
            <Heading variant="display-strong-m" style={{ color: "var(--bone)" }}>
              Drowning in Emails?
            </Heading>
            <Text variant="body-default-l" style={{ color: "var(--slate)", maxWidth: "600px" }}>
              Sign up below to get the free guide on setting up your own personal AI Assistant to manage your inbox.
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
              <label htmlFor="firstName" style={labelStyle}>First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="First Name"
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
        </Column>
      </Column>

      <Footer />
    </Column>
  );
}
