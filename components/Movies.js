import Link from "next/link";
import MovieCard from "./MovieCard";

const Movies = ({ movies, movieType, link }) => {
  return (
    <>
    <style jsx global>
    {`
      .scroll-hidden::-webkit-scrollbar {
        height: 0px;
        background: transparent; /* make scrollbar transparent */
      }
      `}
</style>
    <div className="bg-gray-500 container max-w-7xl mx-auto pb-10 px-4 subpixel-antialiased">
      <div className="flex justify-between items-center ">
      <h1 className="text-white text-2xl mt-8 mb-5">{movieType} Movies </h1>
      <div  className="mt-8 mb-5 border-2 border-white rounded-full px-3  text-white ">
      <Link href={link}>View More</Link>
      </div>
      </div>
      {/* <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 ">
        {movies.map(movie => <MovieCard movie={movie} key={movie.id} />)}
      </div> */}
      <div className="overflow-x-auto  scroll-hidden flex space-x-4 sm:space-x-8 md:space-x-10 lg:space-x-12">
        {/* Use "overflow-x-auto" and "flex" to create a horizontal scrolling container */}
        {movies.map((movie) => (
          // <MovieCard movie={movie} key={movie.id} />
          <div key={movie.id} className="flex-none" style={{ width: "250px" }}>
            {/* Explicitly set a fixed width for MovieCard */}
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Movies;
