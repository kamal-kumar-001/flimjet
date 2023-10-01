import axios from "axios";
import Hero from "../components/Hero";
import Movies from "../components/Movies";
import { server } from "../config";

export default function Home({ movies,popmovies,topmovies }) {
  return (
    <div className="bg-gray-500">
      <Hero latestMovies={popmovies.results.slice(0, 4)} />
      <Movies movieType={"Upcoming"} movies={movies.results} link={"/upcoming"} />
      <Movies movieType={"Popular"} movies={popmovies.results} link={"/popular"}/>
      <Movies movieType={"Top Rated"} movies={topmovies.results} link={"/top-rated"}/>
    </div>
  )
}

export async function getStaticProps() {
  const popres = await axios(`${server}/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`);
  const popmovies = popres.data;
  const topres = await axios(`${server}/top_rated?api_key=${process.env.API_KEY}&language=en-US&page=1`);
  const topmovies = topres.data;
  const res = await axios(`${server}/upcoming?api_key=${process.env.API_KEY}&language=en-US&page=1`);
  const movies = res.data;

  return {
    props: { movies,popmovies,topmovies }
  }
}

