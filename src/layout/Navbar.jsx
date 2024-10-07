import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Squash as Hamburger } from 'hamburger-react';
import { FaChevronRight } from 'react-icons/fa6';
import { motion, AnimatePresence } from 'framer-motion';
import tcLogo from '../assets/images/TC-Logo-with-white-text.svg';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();

  const handleNavigation = (e, path) => {
    if (location.pathname === path) {
      e.preventDefault();
    }
  };

  return (
    <div className="mt-5 flex h-auto flex-col items-center gap-10">
      <div className="flex w-full flex-row">
        <div className="flex h-full w-1/3 flex-row items-center justify-start gap-14 pl-20">
          <img src={tcLogo} alt="Triangle Cyber Logo" className="h-20" />
          <h1 className="text-7xl font-bold">CyberLab</h1>
        </div>
        <div className="flex h-auto w-2/3 flex-row items-center justify-end gap-24 overflow-x-hidden pr-20">
          <div className="relative w-full overflow-hidden">
            <AnimatePresence>
              {isOpen && (
                <motion.nav
                  initial={{ x: '100%' }}
                  animate={{ x: 0 }}
                  exit={{ x: '100%' }}
                  transition={{ type: 'tween', duration: 0.5 }}
                  className="flex h-full w-full flex-row items-center justify-between overflow-x-hidden text-2xl font-semibold underline"
                >
                  <Link
                    to="/"
                    onClick={(e) => handleNavigation(e, '/CyberLab/')}
                    className="cursor-pointer"
                  >
                    Home
                  </Link>
                  <Link
                    to="/"
                    onClick={(e) => handleNavigation(e, '/CyberLab/')}
                    className="cursor-pointer"
                  >
                    Learning Tracks
                  </Link>
                  <Link
                    to="/"
                    onClick={(e) => handleNavigation(e, '/CyberLab/')}
                    className="cursor-pointer"
                  >
                    Leaderboards
                  </Link>
                  <Link
                    to="/"
                    onClick={(e) => handleNavigation(e, '/CyberLab/')}
                    className="cursor-pointer"
                  >
                    SkillBridge
                  </Link>
                  <Link
                    onClick={(e) => handleNavigation(e, '/CyberLab/')}
                    className="flex h-14 w-40 flex-row items-center justify-between rounded-full bg-[#163f44] p-4"
                  >
                    Login
                    <FaChevronRight size={'1.25rem'} />
                  </Link>
                </motion.nav>
              )}
            </AnimatePresence>
          </div>
          <Hamburger
            size={42}
            color="#b9d2ee"
            toggled={isOpen}
            toggle={setIsOpen}
          />
        </div>
      </div>
    </div>
  );
}
