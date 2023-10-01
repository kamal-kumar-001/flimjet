
import TvCard from "./TvCard";

const TVCollection = ({ movies, movieType }) => {
  return (
    <>
    <div className="bg-gray-500 container max-w-7xl mx-auto pb-10 px-4 subpixel-antialiased">
      <div className="flex justify-between items-center ">
      <h1 className="text-white text-2xl mt-8 mb-5">{movieType}  </h1>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 ">
        {movies.map(movie => <TvCard movie={movie} key={movie.id} />)}
      </div>
    </div>
    </>
  );
};

export default TVCollection;
