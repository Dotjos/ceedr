import localFont from "next/font/local";

const bonche = localFont({
  src: [
    {
      path: "./Bonche/free/Fonts/bonche-light.otf",
      // weight: "300",
      style: "normal",
    },
  ],
  variable: "--font-bonche",
  display: "swap",
});

export default bonche;
