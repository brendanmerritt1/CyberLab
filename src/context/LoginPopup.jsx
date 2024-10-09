import { IoMdClose } from 'react-icons/io';

export default function LoginPopup(props) {
  if (!props.isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-700 bg-opacity-80">
      <div className="fixed tabletHori:inset-40 tabletVert:inset-28 flex flex-col items-center rounded-3xl bg-[#161D49]">
        <div className="flex w-full flex-row pt-2">
          <div className="desktop:w-[55%] laptop:w-[55%] tabletHori:w-[60%] tabletVert:w-[70%] text-end text-3xl">
            <span>Login Page</span>
          </div>
          <div className="desktop:w-[45%] laptop:w-[45%] tabletHori:w-[40%] tabletVert:w-[30%] pr-5 text-end">
            <button onClick={props.togglePopup}>
              <IoMdClose
                className="duration-300 hover:scale-125 tabletHori:size-[2.5rem] tabletVert:size-[2rem]"
              />
            </button>
          </div>
        </div>
        <span>Coming Soon!</span>
      </div>
    </div>
  );
}
