import Link from "next/link";
import { useState, useEffect } from "react";

const Hero = ({ latestMovies }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % latestMovies.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + latestMovies.length) % latestMovies.length
    );
  };

  useEffect(() => {
    const interval = setInterval(handleNextSlide, 7000); // Auto slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative bg-gray-900 overflow-hidden">
      <div className="flex h-[60vh]">
        {latestMovies.map((movie, index) => (
          <div
            key={movie.id}
            className={`${
              index === currentSlide
                ? "translate-x-0 opacity-100"
                : "translate-x-full opacity-0"
            } w-full absolute transition-transform duration-500 ease-in-out`}
          >
            <div
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
              className="w-[90vw] h-[60vh] mx-auto absolute inset-0 bg-black opacity-80"
            >
              <div className="flex gap-3">

<Link href={`/movie/${movie.id}`} passHref>
      <div className="absolute bg-gray-300  cursor-pointer top-3/4 left-[190px] border-2 border-gray-700 rounded-md ">
      <p className="py-2 px-4 text-gray-700 text-xl font-neue">
      View Details 
        </p>
      </div>
    </Link>
<Link href={`/movie/${movie.id}`} passHref>
      <div className="absolute bg-gray-300  cursor-pointer top-3/4 left-[40px] border-2 border-gray-700 rounded-md ">
      <p className="py-2 px-4 text-gray-700 text-xl font-neue">
    Watch Trailer
        </p>
      </div>
    </Link>
              </div>
            </div>
          </div>
        ))}
        <button
          className="absolute bg-black rounded-full px-4 py-2 text-2xl top-1/2 left-2 transform -translate-y-1/2 text-white"
          onClick={handlePrevSlide}
        >
          &lt;
        </button>
        <button
          className="absolute bg-black rounded-full px-4 py-2 text-2xl top-1/2 right-2 transform -translate-y-1/2 text-white"
          onClick={handleNextSlide}
        >
          &gt;
        </button>
      </div>
      <div className="flex justify-center -mt-6 mb-2">
        {latestMovies.map((_, index) => (
          <div
            key={index}
            className={`${
              index === currentSlide ? "bg-white" : "bg-gray-500"
            } w-4 h-4 mx-2 rounded-full`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
