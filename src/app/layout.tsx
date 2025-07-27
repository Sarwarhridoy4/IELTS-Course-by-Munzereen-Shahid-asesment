import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Best IELTS Preparation Course by Munzereen Shahid | 10 Minute School",
  description:
    "Join the most comprehensive IELTS preparation course taught by Munzereen Shahid. Includes speaking, writing, reading, listening modules with expert guidance.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900`}
      >
        <div className='flex flex-col min-h-screen'>
          <header className='flex items-center justify-center shadow-sm'>
            <div className='w-full max-w-screen-xl mx-auto px-4'>
              {/* @ts-expect-error: NavBar expects a 'lang' prop, but children may not always provide it */}
              <NavBar lang={children?.props?.lang || "en"} />
            </div>
          </header>
          <main className='flex-grow w-full max-w-screen-xl mx-auto px-4 py-4'>
            {children}
            <FloatingButtons />
          </main>
          <footer className='bg-gray-50 flex items-center justify-center shadow-inner'>
            <div className='w-full max-w-screen-xl mx-auto px-4'>
              <Footer />
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
