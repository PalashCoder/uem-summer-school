import Main from "@/components/Home/Main";
import Navbar from "@/components/Navbar/Navbar";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "UEMK Summer School 2024",
  description:
    "University of engineering and management kolkata present the 2024 summer school program.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${roboto.className} bg-white text-gray-900 tracking-tight`}
      >
        <Navbar />
        {children}
        <Main />
      </body>
    </html>
  );
}
