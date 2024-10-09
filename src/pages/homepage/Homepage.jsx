import WindowSize from '../../utils/WindowSize';
import HomepageDesktop from './HomepageDesktop';
import HomepageLaptop from './HomepageLaptop';

export default function Homepage() {
  const { width } = WindowSize();

  return (
    <>
      {width >= 1600 && <HomepageDesktop />}
      {width >= 1280 && width < 1600 && <HomepageLaptop />}
    </>
  );
}
