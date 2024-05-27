import type { Metadata } from "next";
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import "./globals.css";
import Shell from "@/components/AppShell";


export const metadata: Metadata = {
  title: "Perago Systems",
  description: "Perago Information Systems PLCis a cutting edge and innovative technology based solution providing company with a focus on designing and developing Multi- channel based software solutions using Web, SMS, WAP, IVR, Kiosk, social media, and mobile applications",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <head>
       <link rel="icon" href="/perago.png" sizes="16x16 32x32" type="image/x-icon" />
       <title>Perago Systems</title>
        <ColorSchemeScript />
      </head>
      <body className="bg-white">
        <MantineProvider>
          <Shell>{children}</Shell>
        
        </MantineProvider>
      </body>
    </html>
  );
}
