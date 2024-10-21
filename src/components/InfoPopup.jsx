import AWSSuite from '../assets/text/AWSSuite';
import LabsProjectBoard from '../assets/text/LabsProjectBoard';
import CrowdStrike from '../assets/text/CrowdStrike';
import Splunk from '../assets/text/Splunk';
import ACloudGuru from '../assets/text/ACloudGuru';
import Udemy from '../assets/text/Udemy';
import Tenable from '../assets/text/Tenable';
import LearningResources from '../assets/text/LearningResources';
import LocalEvents from '../assets/text/LocalEvents';
import { IoMdClose } from 'react-icons/io';
import { motion } from 'framer-motion';

export default function InfoPopup(props) {
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
        <div className="my-10 flex h-full max-h-[70vh] flex-col gap-20 overflow-y-auto">
          {props.title == 'AWS Suite' && <AWSSuite />}
          {props.title == 'Labs / Projects Board' && <LabsProjectBoard />}
          {props.title == 'CrowdStrike Falcon' && <CrowdStrike />}
          {props.title == 'Splunk' && <Splunk />}
          {props.title == 'A Cloud Guru' && <ACloudGuru />}
          {props.title == 'Udemy' && <Udemy />}
          {props.title == 'Tenable' && <Tenable />}
          {props.title == 'Learning Resources' && <LearningResources />}
          {props.title == 'Local Events' && <LocalEvents />}
        </div>
      </motion.div>
    </div>
  );
}
