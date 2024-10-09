import { useState } from 'react';
import { MdLogin } from 'react-icons/md';
import tcLogo from '../assets/images/TC-Logo-with-white-text.svg';
import LoginPopup from '../context/LoginPopup';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => setIsOpen(!isOpen);

  return (
    <div className={`flex h-auto w-full items-center pt-5 ${isOpen && ''}`}>
      <div className="flex w-full flex-row">
        <div className="flex h-full w-full flex-row items-center justify-start desktop:gap-14 laptop:gap-8 pl-20">
          <img src={tcLogo} alt="Triangle Cyber Logo" className="desktop:h-20 laptop:h-16" />
          <h1 className="desktop:text-7xl laptop:text-5xl font-bold">CyberLab</h1>
        </div>
        <div
          className="mr-20 flex cursor-pointer flex-row items-center justify-center rounded-3xl bg-gradient-to-t from-[#3e4979] to-[#636fb3] px-4 py-2 shadow-2xl duration-300 hover:scale-110"
          onClick={() => togglePopup()}
        >
          <MdLogin className="laptop:size-[2.5rem] desktop:size-[3rem]" />
        </div>
      </div>
      <div className="absolute left-[20vw] top-[20vh] z-20">
        <LoginPopup isOpen={isOpen} togglePopup={togglePopup} />
      </div>
    </div>
  );
}
