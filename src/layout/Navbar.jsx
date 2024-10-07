import { useState } from 'react';
import { Squash as Hamburger } from 'hamburger-react';
import { FaChevronRight } from 'react-icons/fa6';
import { motion } from 'framer-motion';
import tcLogo from "../assets/images/TC-Logo-with-white-text.svg"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mt-5 flex h-auto flex-col items-center gap-10">
      <div className="flex w-full flex-row">
        <div className="flex h-full w-1/2 flex-row items-center justify-start gap-14 pl-20">
          <img
            src={tcLogo}
            alt="Triangle Cyber Logo"
            className="h-20"
          />
          <h1 className="text-7xl font-bold">CyberLab</h1>
        </div>
        <div className="flex h-auto w-1/2 flex-row items-center justify-end gap-24 pr-20">
          <div
            className={`${isOpen ? '' : 'hidden'} w-5/6 overflow-x-hidden text-2xl font-semibold underline`}
          >
            <motion.nav
              initial={{ x: '100%' }}
              animate={{ x: isOpen ? 0 : '100%' }}
              transition={{ type: 'tween', duration: 0.5 }}
              className="flex h-full w-full flex-row items-center justify-between"
            >
              <h2 className="cursor-pointer">Home</h2>
              <h2 className="cursor-pointer">Learning Tracks</h2>
              <h2 className="cursor-pointer">SkillBridge</h2>
              <button className="flex h-14 w-40 flex-row items-center justify-between rounded-full bg-[#163f44] p-4 no-underline">
                Login
                <FaChevronRight size={'1.25rem'} />
              </button>
            </motion.nav>
          </div>
          <Hamburger
            size={42}
            color="#b9d2ee"
            toggled={isOpen}
            toggle={toggleNav}
          />
        </div>
      </div>
    </div>
  );
}
