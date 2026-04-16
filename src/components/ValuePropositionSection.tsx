"use client";

import { Row, Column } from "@once-ui-system/core";
import { useState } from "react";

const faqs = [
  {
    question: "What exactly do you automate? What do you actually do to help my business?",
    answer: "The stuff that's running through you personally right now. Lead follow-ups. Quote generation. Client onboarding. Scheduling. Invoice chasing. We find processes eating the most time in your business and make them run without anyone touching them. The business keeps moving while you're doing literally anything else."
  },
  {
    question: "Will this actually work for my type of business?",
    answer: "That's what the first call figures out. We try to figure out where you can save time and money within your current processes, and then tell you honestly whether automation fixes it. If it's not the right fit, we'll say so."
  },
  {
    question: "How is this different from tools I've already tried, like Zapier or a chatbot?",
    answer: "Those tools still needed you to hold them together. When you run it with us, we'll handle the messy nodes, integrations, and bug fixes. For example, when a lead comes in, the system responds, qualifies, follows up, and flags you only if it actually needs a human. You wake up and the work has already happened."
  },
  {
    question: "What does it cost, and how long before I see a return on my investment?",
    answer: "Most clients recover the cost within the first two months through leads that used to go cold, quotes that used to take half a day, and follow-ups that used to not happen at all. We'll show you the numbers before you spend anything."
  },
  {
    question: "How long does it take to set up, and how much of my time does it need?",
    answer: "Two hours from you upfront so we understand exactly how your business runs. The automations are live within 14 days, and at that point we walk you through how to read what it's doing. Nothing technical, just \"here's where your leads are, here's what's been sent, here's what's coming.\" Once you've got that, you're done. The system runs. You'll notice it when things that used to fall through the cracks just stop falling through the cracks."
  },
  {
    question: "What happens when something breaks or goes wrong? Am I on my own?",
    answer: "That's what the ongoing management covers. You let us know, we fix it. You're not buying a tool and figuring it out yourself. You're handing the whole thing to us."
  },
  {
    question: "Do I need to change the tools I'm already using?",
    answer: "We try to work around what you've already got, because the goal is to make your existing setup actually function as one thing, but this could happen on rare occasions if you use niche software."
  }
];

export default function ValuePropositionSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Column
      fillWidth
      style={{
        backgroundColor: "var(--midnight)",
        padding: "100px 24px",
      }}
      horizontal="center"
    >
      <Row
        fillWidth
        horizontal="center"
        style={{ maxWidth: "1200px" }}
      >
        <div style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          width: "100%",
          gap: "60px",
          alignItems: "flex-start"
        }}>

          {/* Left Side: Copy */}
          <div style={{
            flex: "1 1 40%",
            minWidth: "200px",
            position: "relative",
            paddingLeft: "32px"
          }}>
            {/* Teal accent line */}
            <div style={{
              position: "absolute",
              left: 0,
              top: "8px",
              bottom: "8px",
              width: "4px",
              backgroundColor: "var(--teal)",
              borderRadius: "4px",
              boxShadow: "0 0 16px rgba(24,195,200,0.4)"
            }} />

            <h2 style={{
              fontFamily: "var(--font-manrope)",
              fontWeight: 800,
              fontSize: "clamp(28px, 3.5vw, 48px)",
              color: "var(--bone)",
              lineHeight: 1.15,
              margin: 0
            }}>
              If a magic bullet existed, this would be it<span style={{ color: "var(--teal)" }}>.</span>
            </h2>

            <p style={{
              fontFamily: "var(--font-montserrat)",
              fontWeight: 400,
              fontSize: "16px",
              color: "var(--slate)",
              lineHeight: 1.75,
              marginTop: "20px",
              marginBottom: 0
            }}>
              We'll set up automations within your business to automatically handle enquiries, follow up with leads, and handle other admin tasks without you touching it. Your business takes on more, responds faster, and keeps moving.
            </p>
          </div>

          {/* Right Side: Accordion */}
          <div style={{
            flex: "1 1 50%",
            minWidth: "200px",
          }}>
            <div style={{
              background: "rgba(36,52,71,0.4)",
              border: "1px solid rgba(24,195,200,0.12)",
              borderRadius: "12px",
              overflow: "hidden"
            }}>
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                const isLast = index === faqs.length - 1;
                return (
                  <div key={index} style={{
                    borderBottom: isLast ? "none" : "1px solid rgba(255,255,255,0.06)",
                    background: isOpen ? "rgba(24,195,200,0.05)" : "transparent",
                    transition: "background 0.3s ease"
                  }}>
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "18px 24px",
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        textAlign: "left"
                      }}
                    >
                      <span style={{
                        fontFamily: "var(--font-montserrat)",
                        fontWeight: 600,
                        fontSize: "14px",
                        color: "var(--bone)",
                        paddingRight: "16px"
                      }}>
                        {faq.question}
                      </span>
                      <span style={{
                        color: "var(--teal)",
                        fontSize: "20px",
                        fontWeight: 400,
                        flexShrink: 0,
                        transition: "transform 0.3s ease",
                        textShadow: isOpen ? "0 0 10px rgba(24,195,200,0.5)" : "none",
                      }}>
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>
                    <div style={{
                      height: isOpen ? "auto" : 0,
                      overflow: "hidden",
                      transition: "height 0.3s ease",
                      padding: isOpen ? "0 24px 18px" : "0 24px 0",
                    }}>
                      <div style={{
                        fontFamily: "var(--font-montserrat)",
                        fontWeight: 400,
                        fontSize: "14px",
                        color: "var(--slate)",
                        lineHeight: 1.65,
                      }}>
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </Row>
    </Column>
  );
}
