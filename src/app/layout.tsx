import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import bonche from "./fonts/boncheConf";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Ceedr landing page",
  description: "Ceedr landing page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bonche.className} ${poppins.variable}`}>
      <body className={``}>{children}</body>
    </html>
  );
}
