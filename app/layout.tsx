import { Outfit, Afacad } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const afacad = Afacad({
  subsets: ["latin"],
  variable: "--font-afacad",
});

export const metadata = {
  title: {
    template: 'LHS', // Template for page titles
    default: 'LHS ', // Fallback for pages without a title
  },
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${afacad.variable}`}>{children}</body>
    </html>
  );
}