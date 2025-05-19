import { useState, useEffect } from "react";
import CompanyCards from "./CompanyCards";

export default function MobileCompanySlider() {
  const totalItems = 8;
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalItems);
    }, 4000); // Slide every 4 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [totalItems]);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % totalItems);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
  };

  return (
    <div className="sm:hidden w-full relative overflow-hidden">
      {/* Slider track */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {Array.from({ length: totalItems }).map((_, idx) => (
          <div key={idx} className="w-full flex-shrink-0 px-4 py-6">
            <CompanyCards />
          </div>
        ))}
      </div>

      {/* Prev button */}
      <button
        onClick={prev}
        className="absolute top-1/2 left-2 -translate-y-1/2 bg-white dark:bg-backgroundDark text-textHeading dark:text-textHeadingDark p-2 rounded-full shadow"
      >
        ◀
      </button>

      {/* Next button */}
      <button
        onClick={next}
        className="absolute top-1/2 right-2 -translate-y-1/2 bg-white dark:bg-backgroundDark text-textHeading dark:text-textHeadingDark p-2 rounded-full shadow"
      >
        ▶
      </button>
    </div>
  );
}
