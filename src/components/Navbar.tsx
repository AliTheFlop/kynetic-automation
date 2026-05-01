"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Row, Column, Text } from "@once-ui-system/core";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isMobileResourcesOpen, setIsMobileResourcesOpen] = useState(false);
  const pathname = usePathname();

  // Close menus when route changes
  useEffect(() => {
    setIsOpen(false);
    setIsResourcesOpen(false);
    setIsMobileResourcesOpen(false);
  }, [pathname]);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      setIsMobileResourcesOpen(false); // Reset accordion when closing
    }
  };

  return (
    <>
      <style>{`
        .desktop-nav { display: flex; }
        .mobile-toggle { display: none; }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: flex !important; }
        }
      `}</style>

      <Row
        as="nav"
        position="sticky"
        fillWidth
        paddingX="s"
        horizontal="center"
        center
        style={{
          height: "var(--navbar-height, 68px)",
          backgroundColor: "rgba(11, 19, 32, 0.85)", 
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
          <Column horizontal="center" style={{ zIndex: 100 }}>
            <Link href="/" style={{ display: "flex" }}>
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

          {/* Desktop Nav */}
          <Row className="desktop-nav" gap="32" vertical="center" horizontal="center">
            
            {/* Resources Dropdown */}
            <div 
              onMouseEnter={() => setIsResourcesOpen(true)}
              onMouseLeave={() => setIsResourcesOpen(false)}
              style={{ position: 'relative', display: 'flex', alignItems: 'center', height: '100%', padding: '10px 0' }}
            >
              <Text 
                variant="body-default-m" 
                style={{ color: isResourcesOpen ? 'var(--brand-solid-strong)' : 'var(--neutral-on-background-strong)', fontWeight: 500, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}
              >
                Resources
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ transform: isResourcesOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s ease' }}>
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </Text>
              
              {isResourcesOpen && (
                <div style={{
                  position: 'absolute',
                  top: '100%',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  backgroundColor: "rgba(18, 26, 38, 0.95)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(24,195,200,0.15)",
                  borderRadius: "12px",
                  padding: "16px",
                  minWidth: "180px",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                  zIndex: 100
                }}>
                  <Link href="/4-tasks-to-automate-first" style={{ textDecoration: 'none' }} onClick={() => setIsResourcesOpen(false)}>
                    <Text 
                      variant="body-default-m"
                      style={{ color: 'var(--bone)', transition: 'color 0.2s ease', whiteSpace: 'nowrap' }}
                      onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.color = 'var(--teal)'}
                      onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.color = 'var(--bone)'}
                    >
                      4 Tasks To Automate First
                    </Text>
                  </Link>
                  <Link href="/inbox-ai-assistant" style={{ textDecoration: 'none' }} onClick={() => setIsResourcesOpen(false)}>
                    <Text 
                      variant="body-default-m"
                      style={{ color: 'var(--bone)', transition: 'color 0.2s ease', whiteSpace: 'nowrap' }}
                      onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.color = 'var(--teal)'}
                      onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.color = 'var(--bone)'}
                    >
                      Inbox AI Assistant
                    </Text>
                  </Link>
                </div>
              )}
            </div>

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

          {/* Mobile Hamburger Toggle */}
          <Row className="mobile-toggle" vertical="center" horizontal="end" style={{ zIndex: 100 }}>
            <button
              onClick={toggleMenu}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '8px',
                display: 'flex',
                flexDirection: 'column',
                gap: '6px',
                width: '40px',
                alignItems: 'flex-end',
              }}
              aria-label="Toggle Menu"
            >
              <div style={{ width: '24px', height: '2px', backgroundColor: 'var(--bone)', transition: 'all 0.3s ease', transform: isOpen ? 'rotate(45deg) translate(5px, 6px)' : 'none' }} />
              <div style={{ width: '24px', height: '2px', backgroundColor: 'var(--bone)', transition: 'all 0.3s ease', opacity: isOpen ? 0 : 1 }} />
              <div style={{ width: '24px', height: '2px', backgroundColor: 'var(--bone)', transition: 'all 0.3s ease', transform: isOpen ? 'rotate(-45deg) translate(5px, -6px)' : 'none' }} />
            </button>
          </Row>
        </Row>
      </Row>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <Column
          position="fixed"
          style={{
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(11, 19, 32, 0.95)",
            backdropFilter: "blur(20px)",
            zIndex: 49,
            paddingTop: "120px",
            paddingLeft: "32px",
            paddingRight: "32px",
            overflowY: "auto",
          }}
          horizontal="center"
        >
          <Column gap="40" style={{ width: '100%', alignItems: 'center' }}>
            <Link href="/" style={{ textDecoration: 'none' }} onClick={() => setIsOpen(false)}>
              <Text 
                variant="display-strong-xs" 
                style={{ color: 'var(--bone)' }}
              >
                Home
              </Text>
            </Link>

            {/* Mobile Resources Accordion */}
            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <button 
                onClick={() => setIsMobileResourcesOpen(!isMobileResourcesOpen)}
                style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}
              >
                <Text 
                  variant="display-strong-xs" 
                  style={{ color: 'var(--bone)' }}
                >
                  Resources
                </Text>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--teal)" strokeWidth="2" style={{ transform: isMobileResourcesOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s ease' }}>
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
              
              <div style={{ 
                height: isMobileResourcesOpen ? 'auto' : 0, 
                opacity: isMobileResourcesOpen ? 1 : 0,
                overflow: 'hidden', 
                transition: 'all 0.3s ease',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '16px',
                marginTop: isMobileResourcesOpen ? '24px' : '0'
              }}>
                <Link href="/4-tasks-to-automate-first" style={{ textDecoration: 'none' }} onClick={() => setIsOpen(false)}>
                  <Text variant="heading-strong-l" style={{ color: 'var(--slate)', textAlign: 'center' }}>
                    4 Tasks To Automate First
                  </Text>
                </Link>
                <Link href="/inbox-ai-assistant" style={{ textDecoration: 'none' }} onClick={() => setIsOpen(false)}>
                  <Text variant="heading-strong-l" style={{ color: 'var(--slate)', textAlign: 'center' }}>
                    Inbox AI Assistant
                  </Text>
                </Link>
              </div>
            </div>

            <Link href="/blog" style={{ textDecoration: 'none' }} onClick={() => setIsOpen(false)}>
              <Text 
                variant="display-strong-xs" 
                style={{ color: 'var(--bone)' }}
              >
                Blog
              </Text>
            </Link>
            
            <Link href="/contact" style={{ textDecoration: 'none', width: '100%', maxWidth: '300px', marginTop: '20px' }} onClick={() => setIsOpen(false)}>
              <button
                style={{
                  backgroundColor: "var(--teal)",
                  color: "#0B1320",
                  fontFamily: "var(--font-manrope)",
                  fontWeight: 700,
                  fontSize: "18px",
                  borderRadius: "8px",
                  padding: "16px 24px",
                  width: "100%",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Get in touch
              </button>
            </Link>
          </Column>
        </Column>
      )}
    </>
  );
}
