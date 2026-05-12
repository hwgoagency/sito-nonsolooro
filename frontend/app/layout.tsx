import type { Metadata } from "next";
import { Cormorant_Garamond, Josefin_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
});

const josefin = Josefin_Sans({
  variable: "--font-josefin",
  subsets: ["latin"],
  weight: ["300", "400", "600"],
});

export const metadata: Metadata = {
  title: "Non Solo Oro | Gioielleria Roma & Compro Oro dal 1997",
  description:
    "Bottega storica romana a Campo de' Fiori. Gioielleria di lusso, valutazione e compro oro. Valore che dura nel tempo.",
  metadataBase: new URL("https://www.nonsoloororoma.it"),
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/logo-v3.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: "/logo-v3.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    type: "website",
    url: "https://www.nonsoloororoma.it",
    title: "Non Solo Oro | Gioielleria Roma & Compro Oro dal 1997",
    description:
      "Bottega storica romana a Campo de' Fiori. Gioielleria di lusso, valutazione e compro oro. Valore che dura nel tempo.",
    siteName: "Non Solo Oro",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Non Solo Oro – Gioielleria a Campo de' Fiori, Roma, dal 1997",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Non Solo Oro | Gioielleria Roma & Compro Oro dal 1997",
    description:
      "Bottega storica romana a Campo de' Fiori. Gioielleria di lusso, valutazione e compro oro. Valore che dura nel tempo.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="it"
      className={`${cormorant.variable} ${josefin.variable} scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
