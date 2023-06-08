'use client'

import React, { useState } from "react";
import { GiHamburgerMenu} from "react-icons/gi";
import Link from "next/link";
import './nnn.css'

const Navbar = () => {
    const [showMediaIcons, setShowMediaIcons] = useState(false);
    
  return (
  <>
    <nav className="p-5 shadow md:flex md:items-center md:justify-between">
      <div className="flex justify-between items-center">
        <span className="text-2xl font-[Poppins] cursor-pointer">
          <p className="website_name">GDC KMR</p>
        </span>

        <span className="text-3xl cursor-pointer mx-2 md:hidden block">
        <a  onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
        </span>
      </div>
<div className="menu">
      <ul
        className={
            showMediaIcons ? "md:flex md:items-center z-[-1] md:z-auto w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 ease-in-out duration-500 menu_links top-[80px] opacity-100" : "md:flex md:items-center z-[-1] md:z-auto md:static absolute w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 menu_links"
          }>
        <li className="mx-4 my-6 md:my-0 link">
          <Link href="/" className=" hover:text-cyan-500 duration-500">HOME</Link>
        </li>
        <li className="mx-4 my-6 md:my-0 link">
          <Link href="/Activites" className=" hover:text-cyan-500 duration-500">Activites</Link>
        </li>
        <li className="mx-4 my-6 md:my-0 link">
          <Link href="/LectureNotes" className=" hover:text-cyan-500 duration-500"
            >Lecture Notes</Link>
        </li>
        <li className="mx-4 my-6 md:my-0 link">
          <Link href="/OldQuestionPapers" className=" hover:text-cyan-500 duration-500"
            >Old Question Papers</Link>
        </li>
        <li className="mx-4 my-6 md:my-0 link">
          <Link href="/PhysicsInIndia" className=" hover:text-cyan-500 duration-500"
            >Physics In India</Link>
        </li>
        <li className="mx-4 my-6 md:my-0 link">
          <Link href="/Practicals" className=" hover:text-cyan-500 duration-500"
            >Practicals</Link>
        </li>
        <li className="mx-4 my-6 md:my-0 link">
          <Link href="/VideoLessons" className=" hover:text-cyan-500 duration-500"
            >Video Lessons</Link>
        </li>
      </ul>
    </div>
    </nav>
    </>
  )
}

export default Navbar
