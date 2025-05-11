import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar  from "./components/navbar";
import Footer from "./components/footer";
import styles from "./styles";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Lighthouse Financial Services",
  icons: {
    icon: "/logo.jpg",               
    shortcut: "/logo.jpg",
    apple: "/logo.jpg",
  },
  description: "A Licensed Agent specializing in Multiple Types of Insurance",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased ${styles.main.container}`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
