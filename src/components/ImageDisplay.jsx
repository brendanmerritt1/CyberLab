import { useEffect, useState } from 'react';
import { fetchImage } from '../utils/RetrieveS3Images.js';

export default function ImageDisplay(props) {
  const [imageURL, setImageURL] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadImage = async () => {
      try {
        const url = await fetchImage(props.imageName);
        setImageURL(url);
      } catch (err) {
        setError('Error loading image');
      } finally {
        setLoading(false);
      }
    };

    loadImage();
  }, [props.imageName]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return <img src={imageURL} alt={props.imageName} className={props.className}></img>;
}
