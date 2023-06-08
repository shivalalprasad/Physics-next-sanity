"use client"
import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import './Nav.scss';
import Link from 'next/link';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar lg:hidden">
       <div className="app__navbar-logo">
        <img src="https://physics.gdckmr.repl.co/utills/images/gdclogo.png" alt="logo" />
      </div>
      <div className="app__navbar-menu">
     
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {['LectureNotes', 'OldQuestionPapers', 'PhysicsInIndia', 'Practicals','VideoLessons'].map((item) => (
                <li key={item}>
                  <Link href={`/${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
