import { IoMdClose } from 'react-icons/io';
import { motion } from 'framer-motion';

export default function LoginPopup(props) {
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
          <div className="text-end text-3xl mobile:w-[75%] mobile:text-2xl tabletVert:w-[70%] tabletHori:w-[60%] laptop:w-[55%] desktop:w-[55%]">
            <span>Login Page</span>
          </div>
          <div className="pr-5 text-end mobile:w-[25%] mobile:pr-3 tabletVert:w-[30%] tabletHori:w-[40%] laptop:w-[45%] desktop:w-[45%]">
            <button onClick={props.togglePopup}>
              <IoMdClose className="size-[2rem] duration-300 hover:scale-125 tabletVert:size-[2rem] tabletHori:size-[2.5rem]" />
            </button>
          </div>
        </div>
        <span>Coming Soon!</span>
      </motion.div>
    </div>
  );
}
