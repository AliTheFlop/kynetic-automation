"use client";

import { Column, Row, Heading, Text, Grid } from "@once-ui-system/core";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { submitContactForm } from "@/app/actions";
import { useRouter } from "next/navigation";
import { generateId, getExternalId, getTrackingCookie } from "@/utils/tracking";
import Image from "next/image";
import AgentVideoShowcase from "@/components/AgentVideoShowcase";

export default function CustomAIAgentBetaPage() {
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
    data.source = "lead_magnet_custom_ai_agent_beta";
    data.event_id = eventId;
    data.external_id = getExternalId();
    data.fbp = getTrackingCookie("_fbp") || "";
    data.fbc = getTrackingCookie("_fbc") || "";

    try {
      const res = await submitContactForm(data);

      if (res.success) {
        setSubmitStatus("success");
        formElement.reset();

        if (typeof window !== 'undefined' && (window as any).fbq) {
          if (data.email) {
            (window as any).fbq('init', '24622388897460037', { em: data.email, external_id: data.external_id });
          }
          (window as any).fbq('track', 'Lead', {}, { eventID: eventId });
        }

        router.push("/custom-ai-agent-beta/thank-you");
      } else {
        setSubmitStatus(`Error: ${res.error}`);
      }
    } catch (error: any) {
      setSubmitStatus(`Error: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputStyle = (id: string, isTextarea = false): React.CSSProperties => ({
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
    transition: "all 0.2s ease",
    resize: isTextarea ? "vertical" as const : "none" as const,
    minHeight: isTextarea ? "100px" : "auto",
  });

  const labelStyle = {
    display: "block",
    fontFamily: "var(--font-montserrat)",
    fontWeight: 600,
    fontSize: "13px",
    color: "#E2E8F0",
    marginBottom: "8px"
  };

  const scrollToForm = () => {
    const formElement = document.getElementById("apply-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Column fillWidth fillHeight style={{ backgroundColor: "var(--midnight)" }}>
      <Navbar />

      <Column as="main" fillWidth horizontal="center" style={{ flex: 1, paddingBottom: "128px" }}>

        {/* SECTION 1 - Hero */}
        <Column fillWidth paddingX="l" paddingY="128" horizontal="center" style={{ position: "relative" }}>
          {/* Subtle Background Glow */}
          <div style={{
            position: "absolute", top: "10%", left: "50%", transform: "translateX(-50%)",
            width: "800px", height: "400px", backgroundColor: "var(--teal)", filter: "blur(120px)", opacity: 0.05,
            zIndex: 0, pointerEvents: "none"
          }} />

          <Column maxWidth="m" fillWidth gap="32" horizontal="center" style={{ textAlign: "center", position: "relative", zIndex: 1 }}>

            <div style={{
              display: "inline-block",
              padding: "8px 16px",
              borderRadius: "100px",
              backgroundColor: "rgba(24,195,200,0.1)",
              border: "1px solid rgba(24,195,200,0.3)",
              color: "var(--teal)",
              fontFamily: "var(--font-montserrat)",
              fontWeight: 600,
              fontSize: "12px",
              letterSpacing: "0.05em",
              textTransform: "uppercase"
            }}>
              🔒 Beta Access. 2 Spots Remaining
            </div>

            <Heading variant="display-strong-m" style={{ color: "var(--bone)", maxWidth: "800px" }}>
              We'll Build You a Custom AI Support Agent For Free.
            </Heading>

            <Column gap="12" horizontal="center">
              <Text variant="body-default-l" style={{ color: "var(--slate)", maxWidth: "600px" }}>
                In exchange for 30 days of honest data and a video testimonial once it's working.
              </Text>
              <Text variant="body-strong-l" style={{ color: "var(--bone)", maxWidth: "600px" }}>
                That's the whole deal.
              </Text>
            </Column>

            <Column gap="16" horizontal="center" style={{ marginTop: "16px" }}>
              <button
                onClick={scrollToForm}
                style={{
                  backgroundColor: "var(--teal)",
                  color: "#0B1320",
                  fontFamily: "var(--font-manrope)",
                  fontWeight: 800,
                  fontSize: "18px",
                  borderRadius: "8px",
                  padding: "18px 36px",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  boxShadow: "0 0 20px rgba(24,195,200,0.4)",
                  width: "100%",
                  maxWidth: "350px"
                }}
                onMouseEnter={(e) => { e.currentTarget.style.filter = "brightness(1.1)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.filter = "brightness(1)"; }}
              >
                Apply for Free Beta Access →
              </button>
              <Text variant="body-default-s" style={{ color: "var(--slate)" }}>
                <em>3 minute application. No credit card. No sales call (yet).</em>
              </Text>
            </Column>

          </Column>
        </Column>

        {/* CONTENT SECTIONS CONTAINER */}
        <Column maxWidth="m" fillWidth paddingX="l" gap="80" horizontal="center" style={{ position: "relative", zIndex: 1 }}>

          {/* SECTION 2 */}
          <Column fillWidth gap="40" horizontal="center">
            <Column gap="8" horizontal="center" style={{ textAlign: "center" }}>
              <Heading variant="heading-strong-xl" style={{ color: "var(--bone)" }}>
                Here's Exactly What You're Signing Up For
              </Heading>
            </Column>

            <Grid columns="2" gap="32" s={{ columns: "1" }}>
              <Column gap="16" style={{
                backgroundColor: "#121A26", padding: "32px", borderRadius: "16px", border: "1px solid rgba(255,255,255,0.05)"
              }}>
                <Text variant="heading-strong-m" style={{ color: "var(--bone)" }}>What you get:</Text>
                <ul style={{ margin: 0, paddingLeft: "20px", color: "var(--slate)", fontFamily: "var(--font-montserrat)", lineHeight: "1.6" }}>
                  <li style={{ marginBottom: "8px" }}>A custom AI support agent built specifically around your business. Your products, policies, FAQs, and edge cases.</li>
                  <li style={{ marginBottom: "8px" }}>Live and handling real Gmail inquiries within 14 days</li>
                  <li style={{ marginBottom: "8px" }}>30 days of active management and adjustments from our team</li>
                  <li style={{ marginBottom: "8px" }}>Bi-weekly reports on what it handled, what it escalated, what we changed</li>
                  <li>Full conversation logs. You get complete visibility the whole time</li>
                </ul>
              </Column>

              <Column gap="16" style={{
                backgroundColor: "#121A26", padding: "32px", borderRadius: "16px", border: "1px solid rgba(255,255,255,0.05)"
              }}>
                <Text variant="heading-strong-m" style={{ color: "var(--bone)" }}>What we get:</Text>
                <ul style={{ margin: 0, paddingLeft: "20px", color: "var(--slate)", fontFamily: "var(--font-montserrat)", lineHeight: "1.6" }}>
                  <li style={{ marginBottom: "8px" }}>Your before/after numbers (volume, time spent, support costs)</li>
                  <li style={{ marginBottom: "8px" }}>A video testimonial if the results are genuinely there</li>
                  <li>30 days of real usage data to build our case studies from</li>
                </ul>
              </Column>
            </Grid>

            <Text variant="body-strong-m" style={{ color: "var(--bone)", padding: "16px 24px", backgroundColor: "rgba(24,195,200,0.05)", borderLeft: "4px solid var(--teal)", borderRadius: "0 8px 8px 0" }}>
              <strong>If it doesn't perform, you owe us nothing.</strong> No testimonial or data, and we part ways instantly.
            </Text>
          </Column>

          {/* SECTION 3 */}
          <Column fillWidth gap="40" horizontal="center">
            <Column gap="12" horizontal="center" style={{ textAlign: "center" }}>
              <Heading variant="heading-strong-xl" style={{ color: "var(--bone)" }}>
                It's Not Completely Free (sadly). Here's What It Costs
              </Heading>
              <Text variant="body-default-m" style={{ color: "var(--slate)" }}>
                We'd rather tell you now than have you find out later.
              </Text>
            </Column>

            <Grid columns="2" gap="24" s={{ columns: "1" }} style={{ marginTop: "8px" }}>
              <Column gap="12" style={{
                backgroundColor: "#121A26", padding: "32px", borderRadius: "16px", border: "1px solid rgba(255,255,255,0.05)"
              }}>
                <Text variant="heading-strong-m" style={{ color: "var(--teal)" }}>
                  N8N Cloud Account
                </Text>
                <Text variant="body-default-m" style={{ color: "var(--slate)", lineHeight: "1.6" }}>
                  This is the automation infrastructure the agent runs on. Around <span style={{ color: "var(--bone)", fontWeight: 600 }}>$20–$50/month</span>. We'll walk you through setting it up, as it only takes about 10 minutes.
                </Text>
              </Column>

              <Column gap="12" style={{
                backgroundColor: "#121A26", padding: "32px", borderRadius: "16px", border: "1px solid rgba(255,255,255,0.05)"
              }}>
                <Text variant="heading-strong-m" style={{ color: "var(--teal)" }}>
                  AI Credits
                </Text>
                <Text variant="body-default-m" style={{ color: "var(--slate)", lineHeight: "1.6" }}>
                  The agent uses a large language model (LLM) to process and respond to inquiries. Depending on your volume, this typically runs <span style={{ color: "var(--bone)", fontWeight: 600 }}>$10–$30/month</span>.
                </Text>
              </Column>
            </Grid>
          </Column>

          {/* SECTION 4 */}
          <Column fillWidth gap="40" style={{ paddingTop: "32px", paddingBottom: "48px" }} horizontal="center">
            <div style={{ height: "1px", width: "100%", backgroundColor: "rgba(255,255,255,0.05)", margin: "16px 0" }} />

            <Column gap="8" horizontal="center" style={{ textAlign: "center" }}>
              <Heading variant="heading-strong-xl" style={{ color: "var(--bone)" }}>
                Fair Enough to Be Skeptical
              </Heading>
            </Column>

            <Column gap="20" style={{ maxWidth: "680px", width: "100%", margin: "0 auto" }}>
              <Text variant="body-default-m" style={{ color: "var(--slate)", lineHeight: "1.7" }}>
                Most AI chatbots you've seen are a FAQ page with a personality slapped on top. They get confused, go generic, and frustrate your customers more than they help.
              </Text>
              <Text variant="body-default-m" style={{ color: "var(--slate)", lineHeight: "1.7" }}>
                The reason that happens is simple: they're not trained on <em>your</em> business. They're trained on the internet.
              </Text>

              <div style={{ height: "1px", width: "100%", backgroundColor: "rgba(255,255,255,0.05)", margin: "24px 0" }} />

              <Text variant="body-strong-m" style={{ color: "var(--bone)", marginBottom: "8px" }}>What we’re testing is different:</Text>

              <Text variant="body-default-m" style={{ color: "var(--slate)", lineHeight: "1.7" }}>
                We set up a <strong>RAG-powered knowledge base,</strong> which means the agent isn't guessing. It's pulling answers directly from your actual store data in real time. Your product catalogue, return policy, shipping rules, edge cases, etc…
              </Text>
              <Text variant="body-default-m" style={{ color: "var(--slate)", lineHeight: "1.7" }}>
                We also log every interaction so if something goes wrong, we catch it fast and fix it.
              </Text>
            </Column>
          </Column>

          {/* SECTION 5 */}
          <Column fillWidth gap="32" horizontal="center">
            <Column gap="8" horizontal="center" style={{ textAlign: "center" }}>
              <Heading variant="heading-strong-xl" style={{ color: "var(--bone)" }}>
                See Exactly What the Agent Does (2 mins)
              </Heading>
            </Column>

            <AgentVideoShowcase />

            <Column gap="8" style={{ paddingLeft: "16px", borderLeft: "1px solid rgba(255,255,255,0.1)" }}>
              <Text variant="body-default-s" style={{ color: "var(--slate)", fontStyle: "italic" }}>Covers:</Text>
              <ul style={{ margin: 0, paddingLeft: "20px", color: "var(--slate)", fontFamily: "var(--font-montserrat)", fontSize: "14px", lineHeight: "1.6" }}>
                <li>A live walkthrough inside a real ecommerce store</li>
                <li>How the knowledge base actually works</li>
                <li>What the agent handles vs. what it escalates</li>
                <li>Who this beta is and isn't right for</li>
              </ul>
            </Column>
          </Column>

          {/* SECTION 6 */}
          <Column fillWidth gap="40" horizontal="center">
            <Column gap="8" horizontal="center" style={{ textAlign: "center" }}>
              <Heading variant="heading-strong-xl" style={{ color: "var(--bone)" }}>
                The Beta Is Right for You If...
              </Heading>
            </Column>

            <Grid columns="2" gap="32" s={{ columns: "1" }}>
              <Column gap="16" style={{
                backgroundColor: "rgba(16, 185, 129, 0.05)", padding: "32px", borderRadius: "16px", border: "1px solid rgba(16, 185, 129, 0.2)"
              }}>
                <Text variant="heading-strong-m" style={{ color: "#10B981", display: "flex", alignItems: "center", gap: "8px" }}>
                  Good fit ✅
                </Text>
                <ul style={{ margin: 0, paddingLeft: "20px", color: "var(--slate)", fontFamily: "var(--font-montserrat)", lineHeight: "1.6" }}>
                  <li style={{ marginBottom: "8px" }}>Doing $200k–$1M+/yr in revenue</li>
                  <li style={{ marginBottom: "8px" }}>Currently paying a VA or support person to handle inquiries</li>
                  <li style={{ marginBottom: "8px" }}>Getting repetitive questions about orders, shipping, returns, or products</li>
                  <li>Willing to track honest numbers before and after</li>
                </ul>
              </Column>

              <Column gap="16" style={{
                backgroundColor: "rgba(239, 68, 68, 0.05)", padding: "32px", borderRadius: "16px", border: "1px solid rgba(239, 68, 68, 0.2)"
              }}>
                <Text variant="heading-strong-m" style={{ color: "#EF4444", display: "flex", alignItems: "center", gap: "8px" }}>
                  Not a fit ❌
                </Text>
                <ul style={{ margin: 0, paddingLeft: "20px", color: "var(--slate)", fontFamily: "var(--font-montserrat)", lineHeight: "1.6" }}>
                  <li style={{ marginBottom: "8px" }}>Pre-revenue or very early stage</li>
                  <li style={{ marginBottom: "8px" }}>No current support process (there's nothing to replace yet)</li>
                  <li style={{ marginBottom: "8px" }}>Not willing to give us access to set it up properly</li>
                  <li>Wanting zero involvement. There's a short onboarding process and we'll need your input upfront</li>
                </ul>
              </Column>
            </Grid>
          </Column>

          {/* SECTION 7 */}
          <Column fillWidth gap="40" horizontal="center">
            <Column gap="8" horizontal="center" style={{ textAlign: "center" }}>
              <Heading variant="heading-strong-xl" style={{ color: "var(--bone)" }}>
                A Few Things People Usually Ask
              </Heading>
            </Column>

            <Column gap="24" style={{ maxWidth: "760px", width: "100%", margin: "0 auto" }}>
              {[
                { q: "What happens after 30 days?", a: "We'll have an honest conversation. If the results are good and you want us to keep managing it, we'll talk about what that looks like." },
                { q: "What if I don't want to do a video testimonial?", a: "If the results aren't there, you're off the hook. If they are there and you still don't want to, we'd rather know that upfront beforehand. The exchange needs to work both ways for this to make sense." },
                { q: "Will it make mistakes early on?", a: "Yes, and we expect that. The first 30 days is an active period where we’re monitoring, logging, and adjusting constantly. You'll know about issues before your customers do." },
                { q: "How does it actually connect to my stuff?", a: "Right now the agent runs through your existing email inbox. No new tools or helpdesk software is required so when a customer sends a support email, the agent reads it, pulls the right answer from your store's knowledge base, and replies. Everything is logged so nothing falls through the cracks. If you're already handling support through Gmail, you're good to go as-is." }
              ].map((faq, idx) => (
                <Column key={idx} gap="8" style={{ paddingBottom: "24px", borderBottom: idx !== 3 ? "1px solid rgba(255,255,255,0.05)" : "none" }}>
                  <Text variant="body-strong-l" style={{ color: "var(--bone)" }}>"{faq.q}"</Text>
                  <Text variant="body-default-m" style={{ color: "var(--slate)" }}>{faq.a}</Text>
                </Column>
              ))}
            </Column>
          </Column>

          {/* SECTION 8 */}
          <Column fillWidth gap="40" id="apply-form" style={{
            backgroundColor: "#121A26", padding: "48px 32px", borderRadius: "24px", border: "1px solid rgba(24,195,200,0.2)",
            boxShadow: "0 24px 80px rgba(0,0,0,0.5)", marginTop: "40px"
          }}>
            <Column gap="8" horizontal="center" style={{ textAlign: "center" }}>
              <Heading variant="heading-strong-xl" style={{ color: "var(--bone)" }}>
                Apply for a Beta Spot
              </Heading>
              <Text variant="body-default-m" style={{ color: "var(--slate)", fontStyle: "italic" }}>
                2 spots available in this round.
              </Text>
            </Column>

            <form
              style={{ width: "100%", display: "flex", flexDirection: "column", gap: "24px" }}
              onSubmit={handleSubmit}
            >
              <Grid columns="2" gap="24" s={{ columns: "1" }}>
                <div>
                  <label htmlFor="name" style={labelStyle}>Full Name</label>
                  <input type="text" id="name" name="name" placeholder="John Doe" required style={inputStyle("name")} onFocus={() => setFocusedField("name")} onBlur={() => setFocusedField(null)} />
                </div>
                <div>
                  <label htmlFor="email" style={labelStyle}>Work Email</label>
                  <input type="email" id="email" name="email" placeholder="you@company.com" required style={inputStyle("email")} onFocus={() => setFocusedField("email")} onBlur={() => setFocusedField(null)} />
                </div>
              </Grid>

              <div>
                <label htmlFor="phone" style={labelStyle}>Phone Number</label>
                <input type="tel" id="phone" name="phone" placeholder="+1 (555) 000-0000" required style={inputStyle("phone")} onFocus={() => setFocusedField("phone")} onBlur={() => setFocusedField(null)} />
              </div>

              <div>
                <label htmlFor="revenue" style={labelStyle}>Monthly revenue (approx)</label>
                <select
                  id="revenue"
                  name="revenue"
                  required
                  defaultValue=""
                  style={{
                    ...inputStyle("revenue"),
                    appearance: "none",
                    backgroundImage: `url("data:image/svg+xml;utf8,<svg fill='white' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/></svg>")`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 16px center",
                    paddingRight: "40px",
                    cursor: "pointer"
                  }}
                  onFocus={() => setFocusedField("revenue")}
                  onBlur={() => setFocusedField(null)}
                >
                  <option value="" disabled style={{ backgroundColor: "#0A0F17", color: "var(--slate)" }}>Select monthly revenue</option>
                  <option value="0-5k" style={{ backgroundColor: "#0A0F17", color: "var(--bone)" }}>$0 – $5,000 / month</option>
                  <option value="5k-10k" style={{ backgroundColor: "#0A0F17", color: "var(--bone)" }}>$5,000 – $10,000 / month</option>
                  <option value="10k-20k" style={{ backgroundColor: "#0A0F17", color: "var(--bone)" }}>$10,000 – $20,000 / month</option>
                  <option value="20k-50k" style={{ backgroundColor: "#0A0F17", color: "var(--bone)" }}>$20,000 – $50,000 / month</option>
                  <option value="50k+" style={{ backgroundColor: "#0A0F17", color: "var(--bone)" }}>$50,000+ / month</option>
                </select>
              </div>

              <div>
                <label htmlFor="currentSupport" style={labelStyle}>How is support currently handled?</label>
                <textarea id="currentSupport" name="currentSupport" placeholder="e.g. VA, founders doing it manually, etc." required style={inputStyle("currentSupport", true)} onFocus={() => setFocusedField("currentSupport")} onBlur={() => setFocusedField(null)} />
              </div>

              <div>
                <label htmlFor="specificTasks" style={labelStyle}>Anything you want us to know?</label>
                <textarea id="specificTasks" name="specificTasks" placeholder="e.g. key details, special requirements, or questions..." style={inputStyle("specificTasks", true)} onFocus={() => setFocusedField("specificTasks")} onBlur={() => setFocusedField(null)} />
              </div>

              <Column gap="16" horizontal="center" style={{ marginTop: "16px" }}>
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
                    padding: "20px 32px",
                    border: "none",
                    cursor: (isSubmitting || submitStatus === "success") ? "default" : "pointer",
                    transition: "all 0.2s ease",
                    boxShadow: submitStatus === "success" ? "0 0 20px rgba(16,185,129,0.3)" : "0 0 20px rgba(24,195,200,0.2)",
                  }}
                  onMouseEnter={(e) => {
                    if (isSubmitting || submitStatus === "success") return;
                    e.currentTarget.style.filter = "brightness(1.1)";
                  }}
                  onMouseLeave={(e) => {
                    if (isSubmitting || submitStatus === "success") return;
                    e.currentTarget.style.filter = "brightness(1)";
                  }}
                >
                  {isSubmitting ? "Submitting..." : submitStatus === "success" ? "Application Sent!" : "Submit Application →"}
                </button>

                <Text variant="body-default-s" style={{ color: "var(--slate)", textAlign: "center" }}>
                  <blockquote style={{ borderLeft: "3px solid var(--teal)", paddingLeft: "16px", margin: "16px 0 0 0", fontStyle: "italic", textAlign: "left" }}>
                    You'll hear back within 48 hours. If you're a fit, we'll get on a short call.
                  </blockquote>
                </Text>
              </Column>

              {submitStatus !== "idle" && submitStatus !== "success" && (
                <div style={{ color: "#EF4444", fontSize: "14px", textAlign: "center", marginTop: "8px", fontFamily: "var(--font-montserrat)" }}>
                  Failed to submit. {submitStatus}
                </div>
              )}
            </form>
          </Column>

        </Column>
      </Column>

      <Footer />
    </Column>
  );
}
