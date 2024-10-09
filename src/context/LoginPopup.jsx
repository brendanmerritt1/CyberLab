import { IoMdClose } from 'react-icons/io';

export default function LoginPopup(props) {
  if (!props.isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-700 bg-opacity-80">
      <div className="fixed inset-40 flex flex-col items-center rounded-3xl bg-[#161D49]">
        <div className="flex w-full flex-row pt-2">
          <div className="w-[55%] text-end text-3xl">
            <span>Login Page</span>
          </div>
          <div className="w-[45%] pr-5 text-end">
            <button onClick={props.togglePopup}>
              <IoMdClose
                size={'2.5rem'}
                className="duration-300 hover:scale-125"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
