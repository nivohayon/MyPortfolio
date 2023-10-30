import { useRef } from 'react';
import Profile from '../Profile/Profile';
import SideNavBar from '../SideNavBar/SideNavBar';
import SocialLinks from '../SocialLinks/SocialLinks';
import About from '../About/About';
import Experience from '../Experience/Experience';
import Projects from '../Projects/Projects';
import Footer from '../Footer/Footer';
import './SplitScreen.css';

function SplitScreen() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="container__SplitScreen">
      <div className="sticky_side_container__SplitScreen">
        <Profile containerRef={containerRef} />
        <SideNavBar />
        <SocialLinks />
      </div>
      <div className="scrolly_side_container__SplitScreen">
        <About />
        <Experience />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}

export default SplitScreen;
