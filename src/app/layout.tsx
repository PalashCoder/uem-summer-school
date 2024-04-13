import { Layout } from "@/components";
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
    <html lang="en">
      <body className={roboto.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
