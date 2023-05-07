import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import localFont from "next/font/local";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";



const gintronic = localFont({
  src: [
    {
      path: "fonts/Gintronic-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "fonts/Gintronic-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "fonts/Gintronic-RegularItalic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "fonts/Gintronic-BoldItalic.otf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-gintronic",
});

interface RootLayoutProps {
  children: React.ReactNode;
}

export const metadata = {
  title: "geevee studio",
  description: "Generated by create next app",
};

export default function RootLayout({children}: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          gintronic.variable,
        )}
      >
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <div className="mx-auto max-w-7xl">{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
