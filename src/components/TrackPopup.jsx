import { useEffect } from 'react';
import { IoMdClose } from 'react-icons/io';
import { motion } from 'framer-motion';
import Certifications from '../pages/learning-tracks/Certifications';
import Cloud from '../pages/learning-tracks/Cloud';
import Cybersecurity from '../pages/learning-tracks/Cybersecurity';
import Visualization from '../pages/learning-tracks/Visualization';
import DevOps from '../pages/learning-tracks/DevOps';
import ML from '../pages/learning-tracks/ML';
import Forensics from '../pages/learning-tracks/Forensics';
import API from '../pages/learning-tracks/API';
import GRC from '../pages/learning-tracks/GRC';

export default function TrackPopup(props) {
  useEffect(() => {
    if (props.isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [props.isOpen]);

  if (!props.isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-700 bg-opacity-80">
      <motion.div
        className="fixed inset-40 flex flex-col items-center rounded-3xl bg-[#161D49] mobile:inset-0 mobile:bottom-60 mobile:left-10 mobile:right-10 mobile:top-36 tabletVert:inset-28"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0, opacity: 0 }}
        transition={{
          type: 'spring',
          stiffness: 70,
          damping: 20,
          duration: 0.1,
        }}
      >
        <div className="flex w-full flex-row pt-2">
          <div className="w-full" />
          <div className="w-full text-center mobile:text-xl tabletVert:text-3xl tabletHori:text-3xl laptop:text-4xl desktop:text-4xl">
            <h2>{props.title}</h2>
          </div>
          <div className="w-full pr-5 text-end mobile:pr-3">
            <button onClick={props.togglePopup}>
              <IoMdClose className="size-[2rem] duration-300 hover:scale-125 tabletVert:size-[2rem] tabletHori:size-[2.5rem]" />
            </button>
          </div>
        </div>
        <div className="my-10 flex h-full max-h-[70vh] w-full flex-col items-center gap-20 overflow-y-auto">
          {props.title == 'Certification Prep' && <Certifications />}
          {props.title == 'Cloud Fundamentals' && <Cloud />}
          {props.title == 'Cybersecurity Essentials' && <Cybersecurity />}
          {props.title == 'Data & Visualization' && <Visualization />}
          {props.title == 'DevOps & Automation' && <DevOps />}
          {props.title == 'ML in Cybersecurity' && <ML />}
          {props.title == 'Digital Forensics' && <Forensics />}
          {props.title == 'API Security & Dev' && <API />}
          {props.title == 'Governance & Compliance' && <GRC />}
        </div>
      </motion.div>
    </div>
  );
}
