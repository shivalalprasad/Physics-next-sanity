"use client"
import Head from "next/Head"
import Script from "next/Script"
import "./nnn.css"
import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import Link from "next/link";


const Navbar = () => {
    const [toggle, setToggle] = useState(false);
  return (
<>
    <Head>
    <link
      href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet"/>
    <link
      href="./nnn.css"rel="stylesheet"/>
    <Script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></Script>
    <Script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></Script>
    <Script type="text/script" src="Nav_Bar.js"></Script>
    </Head>
  <nav className="p-5 shadow md:flex md:items-center md:space-between hidden lg:block m-auto">
    <div className="menu">

      <ul className="md:flex md:items-center z-[-1] md:z-auto md:static absolute w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500 menu_links">
        {['Home', 'Lecture Notes', 'Old Question Papers', 'Physics In India', 'Practicals','Video Lessons'].map((item) => (
          <li className="mx-4 my-6 md:my-0 link" key={`link-${item}`}>
            <div />
            <Link href={`./${item}`}>{item}</Link>
          </li>
        ))}
      </ul>
    </div>
    </nav>
  <nav className="p-5 shadow md:flex md:items-center md:justify-between z-5 md:hidden block ">
    <div className="flex justify-between items-center md:hidden">
      <span className="text-2xl font-[Poppins] cursor-pointer">
        <p className="website_name">GDC KMR</p>
      </span>
    </div>
      <HiMenuAlt4 id="open" className="text-3xl cursor-pointer mx-2 md:hidden block" onClick={() => setToggle(true)} />

        {toggle && (
          <div>
            <HiX id="close" className="text-3xl cursor-pointer mx-2 md:hidden block" onClick={() => setToggle(false)} />
            <ul>
              {['Home', 'LectureNotes', 'OldQuestionPapers', 'PhysicsInIndia', 'Practicals','VideoLessons'].map((item) => (
                <li className="mx-4 my-6 md:my-0 link" key={item}>
                  <Link href={`/${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
   </nav>

</>
  )
}

export default Navbar
