import type { Metadata } from "next";
import "./globals.scss";
import "../icons/icons.css";

export const metadata: Metadata = {
  title: "SELLIX",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hy" suppressHydrationWarning={true}>
      <body className="h-[100dvh]">{children}</body>
    </html>
  );
}
