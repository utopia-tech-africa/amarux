import localFont from "next/font/local";
import { Poppins, Roboto } from "next/font/google";

/** Heading / CTA / nav — Figma uses Mosvita Bold Expanded */
export const mosvitaExpanded = localFont({
  src: [
    {
      path: "../assets/fonts/mosvita/Mosvita-Expanded.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/mosvita/Mosvita-SemiBoldExpanded.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../assets/fonts/mosvita/Mosvita-BoldExpanded.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-mosvita-expanded",
  display: "swap",
});

export const mosvita = localFont({
  src: [
    {
      path: "../assets/fonts/mosvita/Mosvita-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/mosvita/Mosvita-SemiBold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../assets/fonts/mosvita/Mosvita-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-mosvita",
  display: "swap",
});

/** Hero supporting copy */
export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-poppins",
  display: "swap",
});

/** Property intro body (Text/Medium/Normal) */
export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-roboto",
  display: "swap",
});
