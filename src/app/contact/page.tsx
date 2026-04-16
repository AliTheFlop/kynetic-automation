"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactFormLayout from "@/components/ContactFormLayout";
import { Column } from "@once-ui-system/core";

export default function ContactPage() {
  return (
    <Column
      fillWidth
      style={{
        backgroundColor: "var(--midnight)",
      }}
    >
      <Navbar />
      <ContactFormLayout theme="dark" />
      <Footer />
    </Column>
  );
}
