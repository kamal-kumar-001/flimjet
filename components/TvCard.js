import Image from "next/image";
import Link from "next/link";

const TvCard = ({ movie }) => {
  return (
    <Link href={`/tv-show/${movie.id}`} passHref>
      <div className="flex flex-col">
      <div className=" cursor-pointer transform transition-transform hover:scale-105">
        <Image src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} width={500} height={700} className="rounded-2xl" alt={movie.title} />
      </div>
        <div className="px-1 py-1 cursor-pointer">
          <div className="subpixel-antialiased text-white text-xl mb-1">{movie.title}</div>
          {/* <p className="text-gray-700 text-base mb-1">{movie.release_date}</p> */}
        </div>
      </div>
    </Link>
  );
};

export default TvCard;
