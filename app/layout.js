import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        
      </head>
      <body className={inter.className}>
        <Header />
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
