import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import SectionProvider from "./context/SectionContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Animal Adventure Squad",
  description: "Animal Adventure Squad",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
