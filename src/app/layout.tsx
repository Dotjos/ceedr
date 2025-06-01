import type { Metadata } from "next";
import "./globals.css";
import bonche from "./fonts/boncheConf";


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
    <html lang="en" className={bonche.className} >
      <body
        className={``}
      >
        {children}
      </body>
    </html>
  );
}
