import { useEffect, useState } from "react";

const useOnScreen = (ref) => {
  const [isIntersecting, setIntersecting] = useState(false);

  // build threshold list (distance w.r.t view port in this case)
  const buildThresholdList = () => {
    let thresholds = [];
    let numSteps = 20;

    for (let i = 1.0; i <= numSteps; i++) {
      let ratio = i / numSteps;
      thresholds.push(ratio);
    }

    thresholds.push(0);
    return thresholds;
  };

  // create the intersection observer
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.intersectionRatio >= 0.5) setIntersecting(true);
      else setIntersecting(false);
    },
    { root: null, rootMargin: "0px", threshold: buildThresholdList() }
  );

  useEffect(() => {
    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return isIntersecting;
};

export default useOnScreen;
