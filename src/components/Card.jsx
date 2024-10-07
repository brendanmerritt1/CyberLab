import { FaChevronRight } from 'react-icons/fa6';
import { BsFillInfoCircleFill } from 'react-icons/bs';

export default function Card(props) {
  return (
    <div className="flex h-80 w-full flex-col items-center justify-between rounded-2xl bg-[#081f31] px-4 py-5">
      <h2 className="text-center text-3xl font-semibold tracking-wide text-white">
        {props.title}
      </h2>
      <img src={props.image} alt={props.alt} className={`${props.width}`} />
      <div
        className={`flex w-full flex-row items-center ${props.info ? 'justify-between' : 'justify-center'}`}
      >
        {props.info && (
          <a className="duration-300 hover:scale-110">
            <BsFillInfoCircleFill size={'2.5rem'} />
          </a>
        )}
        <a
          className={`flex w-64 flex-row items-center justify-end ${props.gap} rounded-full bg-[#163f44] p-4 text-xl duration-300 hover:scale-110`}
          href={props.url}
          target="_blank"
          rel="noopener"
        >
          <span>{props.button}</span>
          <FaChevronRight />
        </a>
      </div>
    </div>
  );
}
