import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../src/index.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rizal Saifulloh Fatah | Backend Developer",
  description:
    "Portfolio website of Rizal Saifulloh Fatah - Backend Developer specializing in modern web technologies",
  authors: [{ name: "Rizal Fatah" }],
  keywords: ["Rizal Fatah", "Backend Developer", "Portfolio", "Web Developer"],
  openGraph: {
    title: "Rizal Saifulloh Fatah | Backend Developer",
    description:
      "Portfolio website of Rizal Saifulloh Fatah - Backend Developer",
    type: "website",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
