import { useEffect, useState } from "react";

export const UseScrollAnimation = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const elementOffset = document.getElementById("aboutUsSection").offsetTop;
      const windowHeight = window.innerHeight;
      if (scrollTop + windowHeight > elementOffset) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return isVisible;
};
