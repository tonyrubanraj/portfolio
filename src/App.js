import { useEffect, useRef, useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import Navbar from "./scenes/Navbar";
import DotGroup from "./scenes/DotGroup";
import Landing from "./scenes/Landing";
import LineGradient from "./components/LineGradient";
import Projects from "./scenes/Projects";
import Contact from "./scenes/Contact";
import useOnScreen from "./hooks/useOnScreen";

function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  const landingRef = useRef();
  const projectsRef = useRef();
  const contactRef = useRef();
  const isContactVisible = useOnScreen(contactRef);
  const isProjectsVisible = useOnScreen(projectsRef);
  const isLandingVisible = useOnScreen(landingRef);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
      } else {
        setIsTopOfPage(false);
      }

      // set active page section
      if (isContactVisible) {
        setSelectedPage("contact");
      } else if (isProjectsVisible) {
        setSelectedPage("projects");
      } else if (isLandingVisible) {
        setSelectedPage("home");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <div className="app bg-deep-blue">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <div ref={landingRef} className="w-5/6 mx-auto md:h-full">
        {isAboveMediumScreens && (
          <DotGroup
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}
        <Landing setSelectedPage={setSelectedPage} />
      </div>
      <LineGradient />
      <div ref={projectsRef} className="w-5/6 mx-auto">
        <Projects />
      </div>
      <LineGradient />
      <div ref={contactRef} className="w-5/6 mx-auto md:h-full">
        <Contact />
      </div>
    </div>
  );
}

export default App;
