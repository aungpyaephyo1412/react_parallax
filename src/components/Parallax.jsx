import { useEffect, useRef } from "react";
import "./Parallax.css";

const Parallax = () => {
  const parallaxRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrollPosition =
          window.pageYOffset || document.documentElement.scrollTop;
        const parallaxValue = scrollPosition * 0.5; // Adjust the parallax effect speed here
        parallaxRef.current.style.backgroundPositionY = `-${parallaxValue}px`;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="parallax" ref={parallaxRef}>
      <div className="parallax-content w-full">
        <h1 className="text-[#002347] text-[20px] font-bold mb-4">
          {" "}
          BEST ONLINE EDUCATION SERVICE IN THE WORLD{" "}
        </h1>
        <p className="text-[#002347] text-[48px] font-semibold mb-6">
          ONE STEP AHEAD THIS SEASON
        </p>
        <div>
          <button
            type="button"
            className="focus:outline-none bg-[#0DEBFC] hover:bg-[#111827] max-w-4xl focus:ring-4 focus:ring-purple-300 rounded-lg text-sm text-black font-bold hover:text-white px-5 py-2.5 text-center mr-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
          >
            Course
          </button>

          <button
            type="button"
            className="text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2  dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900"
          >
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Parallax;
