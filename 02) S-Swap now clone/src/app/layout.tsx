import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Swapnow | Healthy Meals Delivered",
  description: "Healthy meals delivered to your office. Fresh bowls, sandwiches & salads.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${figtree.variable} font-sans antialiased bg-brand-lightBg text-brand-dark`} suppressHydrationWarning>
      <body className="min-h-screen flex flex-col pt-0 lg:pt-0" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
