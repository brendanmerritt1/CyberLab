import { FaChevronRight } from 'react-icons/fa6';
import { BsFillInfoCircleFill } from 'react-icons/bs';

export default function Card(props) {
  return (
    <div className="flex h-80 w-full flex-col items-center justify-between rounded-2xl bg-gradient-to-t from-[#333c68] to-[#505d96] px-4 py-5 shadow-2xl">
      <h2 className="text-center text-3xl font-semibold tracking-wide">
        {props.title}
      </h2>
      <img src={props.image} alt={props.alt} className={`${props.width}`} />
      <div
        className={`flex w-full flex-row items-center ${props.info ? 'justify-between' : 'justify-center'}`}
      >
        {props.info && (
          <a className="duration-300 hover:scale-110">
            <BsFillInfoCircleFill className="laptop:size-[2.25rem] desktop:size-[2.5rem]" />
          </a>
        )}
        <a
          className={`desktop:w-64 flex flex-row items-center justify-end ${props.gap} laptop:w-56 rounded-full bg-[#161D49] p-4 text-xl duration-300 hover:scale-110`}
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
