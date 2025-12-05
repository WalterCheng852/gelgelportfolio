import type { Metadata } from "next";
import { Noto_Sans_HK, Playfair_Display } from "next/font/google";
import "./globals.css";

const notoSansHK = Noto_Sans_HK({
  variable: "--font-noto-sans-hk",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "YSNAILSBEAUTY",
  description: "Book your session today",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-HK">
      <body
        className={`${notoSansHK.variable} ${playfair.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
