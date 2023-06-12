import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Head from 'next/head'
import { createClient } from "next-sanity";
import { Analytics } from '@vercel/analytics/react';
 

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
      <meta name="google-site-verification" content="emhlqdbv3W9xP9-4GOGvH9iAwu6BzeYsy6tenMFsgqE" />
      </Head>
      <body className={inter.className}>
        <Header />
        <Navbar/>
        {children}
        <Analytics />
        <Footer/>
      </body>
    </html>
  );
}
