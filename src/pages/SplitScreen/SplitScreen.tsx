import { useRef } from 'react';
import Profile from '../../components/Profile/Profile';
import SideNavBar from '../../components/SideNavBar/SideNavBar';
import SocialLinks from '../../components/SocialLinks/SocialLinks';
import About from '../../components/About/About';
import Experience from '../../components/Experience/Experience';
import Projects from '../../components/Projects/Projects';
import Footer from '../../components/Footer/Footer';
import useScrollToHashElement from '../../hooks/useScrollToHashElement';
import Education from '../../components/Education/Education';
import useDetectScrollPosition from '../../hooks/useDetectScrollPosition';
import './SplitScreen.css';

function SplitScreen() {
  useScrollToHashElement();
  const containerRef = useRef<HTMLDivElement>(null);

  // Detect scroll position refs.
  const aboutRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const selectedNavItemByScrollPosition = useDetectScrollPosition(
    containerRef,
    [aboutRef, educationRef, experienceRef, projectsRef]
  );

  return (
    <div ref={containerRef} className="container__SplitScreen">
      <div className="sticky_side_container__SplitScreen">
        <Profile containerRef={containerRef} />
        <SideNavBar
          selectedNavItemByScrollPosition={selectedNavItemByScrollPosition}
        />
        <SocialLinks />
      </div>
      <div className="scrolly_side_container__SplitScreen">
        <About aboutRef={aboutRef} />
        <Education educationRef={educationRef} />
        <Experience experienceRef={experienceRef} />
        <Projects projectsRef={projectsRef} />
        <Footer />
      </div>
    </div>
  );
}

export default SplitScreen;
