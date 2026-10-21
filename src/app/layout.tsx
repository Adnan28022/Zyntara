import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ZYNTARA — Built Different. Train Stronger.",
  description: "ZYNTARA is an elite fitness club delivering high-performance strength training and cinematic wellness experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased selection:bg-[#B7FF2B] selection:text-black">
        {children}
      </body>
    </html>
  );
}