import React, { useEffect, useRef } from "react";
import "flowbite"; // Import Flowbite for carousel functionality

interface CarouselProps {
  items: string[]; // An array of image URLs or any other content you'd like to display in the carousel
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const carouselRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Initialize Flowbite carousel after the component mounts
    if (carouselRef.current) {
      const flowbiteCarousel = new (window as any).Flowbite.Carousel(carouselRef.current);
      return () => {
        flowbiteCarousel.destroy();
      };
    }
  }, []);

  return (
    <div ref={carouselRef} className="relative w-full" data-carousel="slide">
      {/* Carousel wrapper */}
      <div className="relative w-full overflow-hidden rounded-lg">
        <div className="flex">
          {/* Render carousel items */}
          {items.map((item, index) => (
            <div key={index} className="w-1/5 flex-none duration-700 ease-in-out" data-carousel-item>
              <img src={item} alt={`Item ${index + 1}`} className="w-full h-auto object-cover" />
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span className="inline-flex items-center justify-center w-10 h-10 text-white bg-black bg-opacity-50 rounded-full group-hover:bg-opacity-75 group-focus:ring-4 group-focus:ring-black group-focus:ring-opacity-50">
          <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M10 3a1 1 0 01.707.293l4 4a1 1 0 11-1.414 1.414L11 6.414V17a1 1 0 11-2 0V6.414L6.707 8.707a1 1 0 11-1.414-1.414l4-4A1 1 0 0110 3z" clipRule="evenodd"></path>
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>

      <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span className="inline-flex items-center justify-center w-10 h-10 text-white bg-black bg-opacity-50 rounded-full group-hover:bg-opacity-75 group-focus:ring-4 group-focus:ring-black group-focus:ring-opacity-50">
          <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M10 3a1 1 0 01.707.293l4 4a1 1 0 11-1.414 1.414L11 6.414V17a1 1 0 11-2 0V6.414L6.707 8.707a1 1 0 11-1.414-1.414l4-4A1 1 0 0110 3z" clipRule="evenodd"></path>
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default Carousel;
