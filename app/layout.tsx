import type { Metadata } from "next";
import "./globals.css";
import { geistMono, geistSans } from "@/fonts";

export const metadata: Metadata = {
  title: "Financial dashboard",
  description: "Financial dashboard | for maintaining finance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
