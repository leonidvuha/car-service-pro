import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

export const metadata: Metadata = {
  title: "CarService — Ihr Kfz-Meisterbetrieb",
  description:
    "Professioneller Kfz-Service: Reifenwechsel, Ölwechsel, Bremsen und mehr. Jetzt einfach online Termin buchen.",
  keywords: ["Autowerkstatt", "Reifenwechsel", "Kfz-Service", "Ölwechsel", "Termin buchen"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-gray-50 font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
