import { useRef } from 'react';
import Profile from '../../components/Profile/Profile';
import SideNavBar from '../../components/SideNavBar/SideNavBar';
import SocialLinks from '../../components/SocialLinks/SocialLinks';
import About from '../../components/About/About';
import Experience from '../../components/Experience/Experience';
import Projects from '../../components/Projects/Projects';
import Footer from '../../components/Footer/Footer';
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
