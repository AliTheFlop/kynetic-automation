import type { Metadata } from "next";
import { Manrope, Montserrat } from "next/font/google";
import { LayoutProvider } from "@once-ui-system/core";
import "@once-ui-system/core/css/styles.css";
import "@once-ui-system/core/css/tokens.css";
import "./globals.css";
import Script from "next/script";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-manrope",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Kynetic | AI Automation for SMEs",
  description: "We build and manage automations that give your business more output, faster responses, and cleaner follow-ups.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${montserrat.variable}`}>
      <head>
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '24622388897460037');
            fbq('track', 'PageView');
          `}
        </Script>
      </head>
      <body style={{ margin: 0, padding: 0, minHeight: '100vh', display: 'flex', flexDirection: 'column', fontFamily: 'var(--font-montserrat)' }}>
        <LayoutProvider>
          {children}
        </LayoutProvider>
      </body>
    </html>
  );
}
