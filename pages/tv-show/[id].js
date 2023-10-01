import axios from "axios";
import Image from "next/image";
import Meta from "../../components/Meta";
import TVCollection from "../../components/TV-Show";

const TVShow = ({ tvShow, recommendedMovies }) => {
  const trailerVideo = tvShow.videos?.find(video => video.site === 'YouTube');

  return (
    <div className="bg-gray-500">
      <div className="max-w-4xl container mx-auto py-6">
        <Meta title={tvShow.name} />
        <div className="px-3 flex flex-col md:flex-row lg:flex-row gap-4">
          <div>
            <Image
              src={`https://image.tmdb.org/t/p/original${tvShow.poster_path}`}
              width={400}
              height={600}
              className="rounded-xl"
              alt={tvShow.name}
            />
          </div>
          <div>
            <h1 className="font-bold text-4xl my-2">{tvShow.name}</h1>
            <div className="mt-5 flex gap-2 text-gray-100 text-sm">
              Rating: <div className="font-bold">{tvShow.vote_average}</div>
            </div>
            <p className="text-gray-100 text-sm mt-4">{tvShow.overview}</p>
            <p className="text-gray-100 text-sm">
              First Air Date: <span className="font-bold">{tvShow.first_air_date}</span>
            </p>
          </div>
        </div>
        <div className="py-3">
          <TVCollection
            movieType="Recommended"
            movies={recommendedMovies.results.slice(0,3)}
          />
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps(context) {
  const { id } = context.params;
  
  try {
    const tvShowResponse = await axios(`https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.API_KEY}&language=en-US`);
    const tvShow = tvShowResponse.data;

    const videosResponse = await axios(`https://api.themoviedb.org/3/tv/${id}/videos?api_key=${process.env.API_KEY}&language=en-US`);
    const videos = videosResponse?.data.results.filter(video => video.type === 'Trailer');

    const recommendedResponse = await axios(`https://api.themoviedb.org/3/tv/${id}/recommendations?api_key=${process.env.API_KEY}&language=en-US&page=1`);
    const recommendedMovies = recommendedResponse.data;

    return {
      props: {
        tvShow,
        recommendedMovies,
        videos
      }
    };
  } catch (error) {
    console.error('Error fetching TV show details:', error);
    return {
      notFound: true,
    };
  }
}

export async function getStaticPaths() {
  const res = await axios(`https://api.themoviedb.org/3/tv/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`);
  const tvShows = res.data.results;

  const ids = tvShows.map(tvShow => tvShow.id);
  const paths = ids.map(id => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false
  }
}

export default TVShow;
