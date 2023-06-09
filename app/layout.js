import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Department of Physics GDC KMR",
  description: "Discover the Physics Department website of GDC KMR. Explore lecture notes, activities, old question papers, practical guides, college blogs, and more. Enhance your understanding, prepare for exams, and stay updated on the latest in physics. Join us on this educational journey today!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
