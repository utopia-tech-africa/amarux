import type { Metadata } from "next";
import { LenisProvider } from "@/components/lenis-provider";
import { SiteChrome } from "@/components/site-chrome";
import { mosvita, mosvitaExpanded, poppins, roboto } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Amarux",
  description:
    "Due diligence, legal protection, and guidance for property decisions.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${mosvitaExpanded.variable} ${mosvita.variable} ${poppins.variable} ${roboto.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <LenisProvider>
          <SiteChrome>{children}</SiteChrome>
        </LenisProvider>
      </body>
    </html>
  );
}
