import { useState, useEffect } from 'react';
import { Spinner } from '@chakra-ui/spinner';
import TrackPopup from './TrackPopup';
import * as trackUtils from '../utils/LearningTrackUtils.js';

export default function LearningCard(props) {
  const [loadingImg, setLoadingImg] = useState(true);
  const [imgSrc, setImgSrc] = useState(null);
  const [trackOpen, setTrackOpen] = useState(false);
  const [completion, setCompletion] = useState('0.0%');

  const toggleTrackPopup = () => setTrackOpen(!trackOpen);

  useEffect(() => {
    const img = new Image();
    img.src = `${import.meta.env.VITE_S3_BUCKET}${props.imageName}`;
    img.onload = () => {
      setImgSrc(img.src);
      setLoadingImg(false);
    };
  }, [props.imageName]);

  useEffect(() => {
    const fetchData = async () => {
      if (props.user != null) {
        const percentage = await trackUtils.fetchCompletedPercentage(
          props.user,
          props.title
        );
        setCompletion(percentage);
      }
    };

    fetchData();
  }, [props.user, props.modules]);

  return (
    <>
      <div
        className="flex h-auto w-fit cursor-pointer flex-col items-start justify-between gap-2 rounded-2xl bg-gradient-to-t from-[#333c68] to-[#505d96] px-2 py-2 shadow-2xl duration-300 hover:scale-105"
        onClick={toggleTrackPopup}
      >
        {loadingImg ? (
          <Spinner width="3rem" height="3rem" />
        ) : (
          <img src={imgSrc} alt={props.title} className="w-80 rounded-2xl" />
        )}
        <h2 className="mobile:text-md text-center font-semibold tracking-wide mobile:ml-1 tabletVert:ml-2 tabletVert:text-xl tabletHori:text-2xl">
          {props.title}
        </h2>
        <div className="flex flex-row gap-1">
          <h3 className="text-green-300 mobile:ml-1 mobile:text-sm tabletVert:ml-2 tabletVert:text-base">
            {completion}
          </h3>
          <h3 className="text-gray-400 mobile:text-sm tabletVert:text-base">
            Complete
          </h3>
        </div>
      </div>
      <TrackPopup
        isOpen={trackOpen}
        togglePopup={toggleTrackPopup}
        title={props.title}
        modules={props.modules}
        updateModule={props.updateModule}
        user={props.user}
      />
    </>
  );
}
