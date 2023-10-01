import axios from "axios";
import TVCollection from "../components/TV-Show";

export default function Home({ movies }) {
  return (
    <div className="bg-gray-500">
      <TVCollection movieType={"TV Shows"} movies={movies.results} />
    </div>
  )
}

export async function getStaticProps() {
  const res = await axios(`https://api.themoviedb.org/3/tv/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`);
  const movies = res.data;

  return {
    props: { movies }
  }
}

