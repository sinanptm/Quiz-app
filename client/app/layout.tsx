import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "../styles/globals.css";
import StoreProvider from "./storeProvider";
import NavBar from "@/components/NavBar";
import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Ace Quiz App",
  description: "A Next.js Quiz Application.",
};

export default function RootLayout({
  children,
  // login
}: Readonly<{
  children: React.ReactNode;
  // login:React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans  ", fontSans.variable)}>
        <BackgroundGradientAnimation>
          <StoreProvider>
            <NavBar />
            {/* {login} */}
            {children}
          </StoreProvider>
        </BackgroundGradientAnimation>
      </body>
    </html>
  );
}
