import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Trencitos",
  description: "Una alternativa (no oficial) de la aplicación movil Trenes Argentinos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
