"use client";

import { Row, Column } from "@once-ui-system/core";
import { useState } from "react";

const faqs = [
  {
    question: "What's your guarantee?",
    answer: "We stand behind our work. We offer a money back guarantee if you're not seeing results within the first 30 days."
  },
  {
    question: "What exactly do you do?",
    answer: "We manage your Meta ad campaigns, build the follow-up sequences that run behind them, and integrate everything into your CRM so leads are captured, contacted, and tracked without you manually doing any of it."
  },
  {
    question: "How is this different from just hiring a media buyer?",
    answer: "A media buyer stops at the ad. We add another layer for automated follow ups that make the chances of actually converting a lead much higher."
  },
  {
    question: "What kind of businesses do you work with?",
    answer: "We work with service businesses that have a clear offer and just need more of the right people to see it, and a proper system to handle it."
  },
  {
    question: "What should I expect from your ads?",
    answer: "The first 1-2 weeks is the optimisation phase, we test a bunch of different ad creatives to see what works. From there we push hard on what's working and kill what's not."
  },
  {
    question: "What does it actually cost?",
    answer: "Our service fee is a flat rate of $750/mo. No vague pricing or 6 month contracts here :-)"
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
              What if your marketing actually worked end to end<span style={{ color: "var(--teal)" }}>.</span>
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
              We build the whole system: from ads that bring in the right people, to automated follow-ups that reply before your competitors
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
