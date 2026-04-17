"use client";

import { Row, Column } from "@once-ui-system/core";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { submitContactForm } from "@/app/actions";
import { generateId, getExternalId, getTrackingCookie } from "@/utils/tracking";

interface ContactDetail {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}

interface ContactFormLayoutProps {
  theme?: "dark" | "light";
  title?: React.ReactNode;
  description?: string;
  details?: ContactDetail[];
}

export default function ContactFormLayout({
  theme = "dark",
  title = "Let's See if We're a Good Fit",
  description = "Fill out the form and we'll be in touch within 24-48 hours to find out if we're a good fit",
  details
}: ContactFormLayoutProps) {
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | string>("idle");
  const router = useRouter();

  const isDark = theme === "dark";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const formElement = e.currentTarget;
    const formData = new FormData(formElement);
    const data = Object.fromEntries(formData.entries());

    // Generate unique Event and External IDs
    const eventId = generateId();
    
    // Enrich with Meta tracking parameters
    data.source = "primary_contact_form";
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

        router.push("/thank-you");
      } else {
        console.error("Form action failed:", res.error);
        setSubmitStatus(`Error: ${res.error || 'Server rejected submission'}`);
      }
    } catch (error: any) {
      console.error("Form submission threw:", error);
      setSubmitStatus(`Error: ${error.message || 'Client boundary exception'}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const MapPinIcon = (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
      <circle cx="12" cy="10" r="3"></circle>
    </svg>
  );

  const MailIcon = (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
      <polyline points="22,6 12,13 2,6"></polyline>
    </svg>
  );

  const defaultDetails: ContactDetail[] = [
    {
      icon: MapPinIcon,
      title: "Based in",
      subtitle: "Sydney, Australia"
    },
    {
      icon: MailIcon,
      title: "Email",
      subtitle: "ali@kynetic.one"
    }
  ];

  const finalDetails = details || defaultDetails;

  // Colors based on theme
  const bgColor = isDark ? "var(--midnight)" : "var(--bone)";
  const textColor = isDark ? "var(--bone)" : "var(--midnight)";
  const slateColor = isDark ? "#A0AAB9" : "var(--slate)"; // Lighter slate for dark bg
  const cardBgColor = isDark ? "#121A26" : "#FFFFFF"; // The dark card on the right
  const cardBorderColor = isDark ? "rgba(24,195,200,0.1)" : "#E4E6E1";
  const inputBgColor = isDark ? "#0A0F17" : "#F7F8F4";
  const inputBorderColor = isDark ? "rgba(255,255,255,0.05)" : "#D9DBD5";

  const inputStyle = (id: string) => ({
    width: "100%",
    backgroundColor: inputBgColor,
    border: focusedField === id ? "1px solid var(--teal)" : `1px solid ${inputBorderColor}`,
    borderRadius: "8px",
    padding: "16px 16px",
    fontFamily: "var(--font-montserrat)",
    fontSize: "14px",
    color: textColor,
    outline: "none",
    boxShadow: focusedField === id ? "0 0 0 3px rgba(24,195,200,0.15)" : "none",
    transition: "all 0.2s ease"
  });

  const labelStyle = {
    display: "block",
    fontFamily: "var(--font-montserrat)",
    fontWeight: 600,
    fontSize: "13px",
    color: isDark ? "#E2E8F0" : "var(--midnight)",
    marginBottom: "8px"
  };

  return (
    <Row
      fillWidth
      horizontal="center"
      style={{
        backgroundColor: bgColor,
        padding: "100px 24px",
      }}
    >
      <Row
        gap="80"
        s={{ direction: "column", style: { gap: "60px" } }}
        style={{
          maxWidth: "1200px",
          width: "100%"
        }}
      >
        {/* Left Column: Copy & Details */}
        <Column
          gap="32"
          style={{ width: "45%" }}
          s={{ style: { width: "100%" } }}
        >
          <Column gap="24">
            <h2 style={{
              fontFamily: "var(--font-manrope)",
              fontWeight: 800,
              fontSize: "clamp(36px, 5vw, 54px)",
              color: textColor,
              lineHeight: 1.15,
              margin: 0
            }}>
              {title}
            </h2>
            <p style={{
              fontFamily: "var(--font-montserrat)",
              fontWeight: 400,
              fontSize: "17px",
              lineHeight: 1.6,
              color: slateColor,
              margin: 0
            }}>
              {description}
            </p>
          </Column>

          {finalDetails.length > 0 && (
            <Column gap="24" style={{ marginTop: "16px" }}>
              {finalDetails.map((detail, idx) => (
                <Row key={idx} vertical="center" gap="16">
                  <div style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "12px",
                    backgroundColor: isDark ? "rgba(24, 195, 200, 0.1)" : "rgba(24, 195, 200, 0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--teal)"
                  }}>
                    {detail.icon}
                  </div>
                  <Column gap="4">
                    <span style={{
                      fontFamily: "var(--font-montserrat)",
                      fontWeight: 700,
                      fontSize: "14px",
                      color: textColor
                    }}>
                      {detail.title}
                    </span>
                    <span style={{
                      fontFamily: "var(--font-montserrat)",
                      fontWeight: 400,
                      fontSize: "14px",
                      color: slateColor
                    }}>
                      {detail.subtitle}
                    </span>
                  </Column>
                </Row>
              ))}
            </Column>
          )}
        </Column>

        {/* Right Column: Form Container */}
        <Column
          style={{ width: "55%" }}
          s={{ style: { width: "100%" } }}
        >
          <form
            style={{
              width: "100%",
              backgroundColor: cardBgColor,
              border: `1px solid ${cardBorderColor}`,
              borderRadius: "20px",
              padding: "clamp(32px, 5vw, 48px) clamp(20px, 4vw, 40px)",
              boxShadow: isDark ? "0 24px 80px rgba(0,0,0,0.5)" : "0 12px 60px rgba(11,19,32,0.06)",
              display: "flex",
              flexDirection: "column",
              gap: "24px"
            }}
            onSubmit={handleSubmit}
          >
            {/* Grid 1: Name */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "16px"
            }}>
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
                <label htmlFor="lastName" style={labelStyle}>Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Last Name"
                  required
                  style={inputStyle("lastName")}
                  onFocus={() => setFocusedField("lastName")}
                  onBlur={() => setFocusedField(null)}
                />
              </div>
            </div>

            {/* Grid 2: Email & Company */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "16px"
            }}>
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
              <div>
                <label htmlFor="company" style={labelStyle}>Company</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  placeholder="Your company"
                  required
                  style={inputStyle("company")}
                  onFocus={() => setFocusedField("company")}
                  onBlur={() => setFocusedField(null)}
                />
              </div>
            </div>

            {/* Row 3: Website */}
            <div>
              <label htmlFor="website" style={labelStyle}>Company Website</label>
              <input
                type="text"
                id="website"
                name="website"
                placeholder="yourcompany.com"
                style={inputStyle("website")}
                onFocus={() => setFocusedField("website")}
                onBlur={() => setFocusedField(null)}
              />
            </div>

            {/* Row 6: Project Details */}
            <div>
              <label htmlFor="projectDetails" style={labelStyle}>Tell Us About Your Project</label>
              <textarea
                id="projectDetails"
                name="projectDetails"
                placeholder="What challenges are you facing? What does success look like for your business?"
                required
                style={{
                  ...inputStyle("projectDetails"),
                  minHeight: "140px",
                  resize: "vertical"
                }}
                onFocus={() => setFocusedField("projectDetails")}
                onBlur={() => setFocusedField(null)}
              />
            </div>

            {/* Submit */}
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
                letterSpacing: "0.02em",
                border: "none",
                cursor: (isSubmitting || submitStatus === "success") ? "default" : "pointer",
                transition: "all 0.2s ease",
                marginTop: "16px",
                boxShadow: submitStatus === "success" ? "0 0 20px rgba(16,185,129,0.3)" : "0 0 20px rgba(24,195,200,0)",
                opacity: isSubmitting ? 0.7 : 1,
              }}
              onMouseEnter={(e) => {
                if (isSubmitting || submitStatus === "success") return;
                e.currentTarget.style.boxShadow = "0 0 30px rgba(24,195,200,0.4)";
                e.currentTarget.style.filter = "brightness(1.05)";
              }}
              onMouseLeave={(e) => {
                if (isSubmitting || submitStatus === "success") return;
                e.currentTarget.style.boxShadow = "0 0 20px rgba(24,195,200,0)";
                e.currentTarget.style.filter = "brightness(1)";
              }}
            >
              {isSubmitting ? "Submitting..." : submitStatus === "success" ? "Inquiry Sent!" : "Submit Inquiry"}
            </button>
            {submitStatus !== "idle" && submitStatus !== "success" && (
              <div style={{ color: "#EF4444", fontSize: "14px", textAlign: "center", marginTop: "8px", fontFamily: "var(--font-montserrat)" }}>
                Failed to send inquiry. {submitStatus}
              </div>
            )}
          </form>
        </Column>
      </Row>
    </Row>
  );
}
