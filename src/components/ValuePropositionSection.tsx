"use client";

import { Row, Column } from "@once-ui-system/core";
import { useState } from "react";

const faqs = [
  "What exactly do you automate? What do you actually do to help my business?",
  "Will this actually work for my type of business?",
  "How is this different from tools I've already tried, like Zapier or a chatbot?",
  "What does it cost, and how long before I see a return on my investment?",
  "How long does it take to set up, and how much of my time does it need?",
  "What happens when something breaks or goes wrong? Am I on my own?",
  "Do I need to change the tools I'm already using?"
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
                        {faq}
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
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
