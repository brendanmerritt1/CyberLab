import { FaChevronRight } from 'react-icons/fa6';
import { BsFillInfoCircleFill } from 'react-icons/bs';

export default function Card(props) {
  return (
    <div className="tabletHori:h-80 tabletVert:h-64 flex w-full flex-col items-center justify-between rounded-2xl bg-gradient-to-t from-[#333c68] to-[#505d96] px-4 py-5 shadow-2xl">
      <h2 className="tabletHori:text-3xl tabletVert:text-xl text-center font-semibold tracking-wide tabletVert:leading-5">
        {props.title}
      </h2>
      <img src={props.image} alt={props.alt} className={`${props.width}`} />
      <div
        className={`tabletHori:flex-row tabletVert:flex-col tabletVert:gap-4 flex w-full items-center ${props.info ? 'justify-between' : 'justify-center'}`}
      >
        {props.info && (
          <a className="duration-300 hover:scale-110">
            <BsFillInfoCircleFill className="laptop:size-[2.25rem] desktop:size-[2.5rem] tabletHori:size-[2rem] tabletVert:size-[1.5rem]" />
          </a>
        )}
        <a
          className={`desktop:w-64 flex flex-row items-center justify-end ${props.gap} laptop:w-56 tabletHori:w-48 tabletVert:w-36 tabletHori:p-4 tabletVert:p-2 tabletHori:text-xl tabletVert:text-md rounded-full bg-[#161D49] duration-300 hover:scale-110`}
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
