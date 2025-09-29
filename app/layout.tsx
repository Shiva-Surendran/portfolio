import type { Metadata } from "next";
import { Oswald, Noto_Sans, Open_Sans } from "next/font/google";
import "./globals.css"; // Still needed to import Tailwind

const sans = Open_Sans({
  weight: "500",
   subsets: ['latin'], 
});

// ... metadata remains the same

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // 1. Replaced 'html { scroll-behavior: smooth; }'
    // 2. Added Arbitrary Value for your specific dark background color
    <html lang="en" className="scroll-smooth">
      <body
        className={`
          ${sans.className} 
          
          /* The classes below replace all the colors and font fallback from globals.css */
          
          /* 1. Light Mode Colors (Replaces --background: #ffffff and --foreground: #171717) */
          bg-white text-neutral-900 
          
          /* 2. Dark Mode Colors (Replaces dark mode variables) */
          dark:bg-[#0a0a0a] dark:text-neutral-100
          
          /* 3. The smooth-scroll class was on body but should be on html (fixed above) */
        `}
      >
        {children}
      </body>
    </html>
  );
}