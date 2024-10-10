import WindowSize from '../../utils/WindowSize';
import HomepageDesktop from './HomepageDesktop';
import HomepageLaptop from './HomepageLaptop';
import HomepageTabletHori from './HomepageTabletHori';
import HomepageTabletVert from './HomepageTabletVert';
import HomepageMobile from './HomepageMobile';

export default function Homepage() {
  const { width } = WindowSize();

  return (
    <>
      {width >= 1600 && <HomepageDesktop />}
      {width >= 1280 && width < 1600 && <HomepageLaptop />}
      {width >= 960 && width < 1280 && <HomepageTabletHori />}
      {width >= 600 && width < 960 && <HomepageTabletVert />}
      {width >= 320 && width < 600 && <HomepageMobile />}
    </>
  );
}
