import { FaChevronRight } from 'react-icons/fa6';
import { BsFillInfoCircleFill } from 'react-icons/bs';

export default function Card(props) {
  return (
    <div className="flex w-full flex-col items-center justify-between rounded-2xl bg-gradient-to-t from-[#333c68] to-[#505d96] px-4 py-5 mobile:py-3 shadow-2xl mobile:h-64 tabletVert:h-64 tabletHori:h-80">
      <h2 className="text-center font-semibold tracking-wide tabletVert:text-xl tabletVert:leading-5 tabletHori:text-3xl mobile:text-xl mobile:leading-6">
        {props.title}
      </h2>
      <div
        className={`flex w-full items-center mobile:flex-col mobile:gap-4 tabletVert:flex-col tabletVert:gap-4 tabletHori:flex-row ${props.info ? 'justify-between' : 'justify-center'}`}
      >
        {props.info && (
          <a className="duration-300 hover:scale-110">
            <BsFillInfoCircleFill className="mobile:size-[1.85rem] tabletVert:size-[1.5rem] tabletHori:size-[2rem] laptop:size-[2.25rem] desktop:size-[2.5rem]" />
          </a>
        )}
        <a
          className={`flex flex-row items-center justify-end desktop:w-64 ${props.gap} tabletVert:text-md rounded-full bg-[#161D49] duration-300 hover:scale-110 mobile:w-36 mobile:p-2 tabletVert:w-36 tabletVert:p-2 tabletHori:w-48 tabletHori:p-4 tabletHori:text-xl laptop:w-56`}
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
