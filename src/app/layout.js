import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import SectionProvider from "./context/SectionContext";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Animal Adventure Squad",
  description: "Animal Adventure Squad",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Link rel="canonical" hrefLang="en" href="http://simplelocalize.com/"/>
      </head>
      <body className={inter.className}>
        <SectionProvider>
          <Header />
          {children}
          <Footer />
        </SectionProvider>
      </body>
    </html>
  );
}
