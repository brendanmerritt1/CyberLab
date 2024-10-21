import { useState, useEffect } from 'react';
import InfoPopup from './InfoPopup';
import { FaChevronRight } from 'react-icons/fa6';
import { BsFillInfoCircleFill } from 'react-icons/bs';
import { Spinner } from '@chakra-ui/spinner';

export default function Card(props) {
  const [loadingImg, setLoadingImg] = useState(true);
  const [imgSrc, setImgSrc] = useState(null);
  const [infoIsOpen, setInfoIsOpen] = useState(false);
  const [buttonIsOpen, setButtonIsOpen] = useState(false);

  const toggleInfoPopup = () => setInfoIsOpen(!infoIsOpen);
  const toggleButtonPopup = () => {
    if (
      (props.title == 'Learning Resources') |
      (props.title == 'Local Events')
    ) {
      setButtonIsOpen(!buttonIsOpen);
    }
  };

  useEffect(() => {
    const img = new Image();
    img.src = `${import.meta.env.VITE_S3_BUCKET}${props.imageName}`;
    img.onload = () => {
      setImgSrc(img.src);
      setLoadingImg(false);
    };
  }, [props.imageName]);

  return (
    <div className="flex w-full flex-col items-center justify-between rounded-2xl bg-gradient-to-t from-[#333c68] to-[#505d96] px-4 py-5 shadow-2xl mobile:h-64 mobile:py-3 tabletVert:h-64 tabletHori:h-80">
      <h2 className="text-center font-semibold tracking-wide mobile:text-xl mobile:leading-6 tabletVert:text-xl tabletVert:leading-5 tabletHori:text-3xl">
        {props.title}
      </h2>
      {loadingImg ? (
        <Spinner width="3rem" height="3rem" />
      ) : (
        <img src={imgSrc} alt={props.alt} className={props.width} />
      )}
      <div
        className={`flex w-full items-center mobile:flex-col mobile:gap-4 tabletVert:flex-col tabletVert:gap-4 tabletHori:flex-row ${props.info ? 'justify-between' : 'justify-center'}`}
      >
        {props.info && (
          <a className="duration-300 hover:scale-110">
            <BsFillInfoCircleFill
              onClick={toggleInfoPopup}
              className="cursor-pointer mobile:size-[1.85rem] tabletVert:size-[1.5rem] tabletHori:size-[2rem] laptop:size-[2.25rem] desktop:size-[2.5rem]"
            />
          </a>
        )}
        {infoIsOpen && (
          <InfoPopup
            isOpen={infoIsOpen}
            togglePopup={toggleInfoPopup}
            title={props.title}
          />
        )}
        <a
          className={`flex cursor-pointer flex-row items-center justify-end desktop:w-64 ${props.gap} tabletVert:text-md rounded-full bg-[#161D49] duration-300 hover:scale-110 mobile:w-36 mobile:p-2 tabletVert:w-36 tabletVert:p-2 tabletHori:w-48 tabletHori:p-4 tabletHori:text-xl laptop:w-56`}
          href={props.url}
          target="_blank"
          rel="noopener"
          onClick={toggleButtonPopup}
        >
          <span>{props.button}</span>
          <FaChevronRight />
        </a>
        {buttonIsOpen && (
          <InfoPopup
            isOpen={buttonIsOpen}
            togglePopup={toggleButtonPopup}
            title={props.title}
          />
        )}
      </div>
    </div>
  );
}
