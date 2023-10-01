import axios from "axios";
import Image from "next/image";
import Meta from "../../../components/Meta";
import { server } from "../../../config";
import Link from "next/link";
import Movies from "../../../components/Movies";

const Movie = ({ movie, movies, videos }) => {
  const trailerVideo = videos.find(video => video.site === 'YouTube');
  return (
    <div className=" bg-gray-500 ">

      <div className=" max-w-4xl container mx-auto py-6">
        <Meta title={movie.title} />
        <div className="px-3 flex flex-col md:flex-row lg:flex-row  gap-4">
          <div>
            <Image src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} width={700} height={1000} className="rounded-xl" alt={movie.title} />
          </div>
          <div>
            <h1 className="font-bold text-4xl my-2">{movie.title}</h1>
            <div className="mt-5 flex gap-2 text-gray-100 text-sm"> Rating: <div className=" font-bold">  {movie.vote_average}</div></div>
            <div className="mt-5 text-gray-100 text-sm"> <div className="flex gap-3 font-bold">{movie.genres.map((genre, id) => (
              <div key={id} className=" mb-5  border-2 border-gray-100  rounded-full px-3   ">
                <Link href={"/"}>{genre.name}</Link>
              </div>
            ))}</div></div>
            <p className="text-gray-100 text-sm mt-4">{movie.overview}</p>
            <p className="text-gray-100 text-sm">Release Date: <span className="font-bold">{movie.release_date}</span></p>
          </div>
        </div>
        <div className="py-3">
          <h1 className="font-bold text-4xl my-2">Watch Trailer</h1>
          <div className="h-[500px]">
        {trailerVideo ? (
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${trailerVideo.key}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <p className="text-center text-3xl pt-32">No Trailer Available</p>
        )}
      </div>
        </div>
        <div className="py-3">
          <Movies movieType={"Recommended"} movies={movies.results} link={"/popular"} />
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps(context) {
  const { id } = context.params;
  const res = await axios(`${server}/${id}?api_key=${process.env.API_KEY}&language=en-US&page=1`);
  const movie = res.data;

  const videosRes = await axios(`${server}/${id}/videos?api_key=${process.env.API_KEY}&language=en-US`);
  const videos = videosRes.data.results.filter(video => video.type === 'Trailer');

  const response = await axios(`${server}/upcoming?api_key=${process.env.API_KEY}&language=en-US&page=1`);
  const movies = response.data;
  // console.log(movies);

  return {
    props: {
      movie,
      movies,
      videos
    }
  }
}

export async function getStaticPaths() {
  const res = await axios(`${server}/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`);
  const movies = res.data.results;

  const ids = movies.map(movie => movie.id);
  const paths = ids.map(id => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false
  }
}

export default Movie;
