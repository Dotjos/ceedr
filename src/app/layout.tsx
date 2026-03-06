import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

const bonche = localFont({
  src: [
    {
      path: "./fonts/Bonche/Demo_Fonts/Fontspring-DEMO-bonche-light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/Bonche/Demo_Fonts/Fontspring-DEMO-bonche-lightitalic.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "./fonts/Bonche/Demo_Fonts/Fontspring-DEMO-bonche-regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Bonche/Demo_Fonts/Fontspring-DEMO-bonche-italic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/Bonche/Demo_Fonts/Fontspring-DEMO-bonche-medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Bonche/Demo_Fonts/Fontspring-DEMO-bonche-mediumitalic.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "./fonts/Bonche/Demo_Fonts/Fontspring-DEMO-bonche-semibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/Bonche/Demo_Fonts/Fontspring-DEMO-bonche-semibolditalic.otf",
      weight: "600",
      style: "italic",
    },
    {
      path: "./fonts/Bonche/Demo_Fonts/Fontspring-DEMO-bonche-bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Bonche/Demo_Fonts/Fontspring-DEMO-bonche-bolditalic.otf",
      weight: "700",
      style: "italic",
    },
    {
      path: "./fonts/Bonche/Demo_Fonts/Fontspring-DEMO-bonche-extrabold.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./fonts/Bonche/Demo_Fonts/Fontspring-DEMO-bonche-extrabolditalic.otf",
      weight: "800",
      style: "italic",
    },
    {
      path: "./fonts/Bonche/Demo_Fonts/Fontspring-DEMO-bonche-black.otf",
      weight: "900",
      style: "normal",
    },
    {
      path: "./fonts/Bonche/Demo_Fonts/Fontspring-DEMO-bonche-blackitalic.otf",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--font-bonche",
});

export const metadata: Metadata = {
  title: "Ceedr",
  description: "Ceedr",
  icons: {
    icon: "/favicon.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bonche.variable} ${poppins.variable}`}>
      <body className={``}>{children}</body>
    </html>
  );
}
