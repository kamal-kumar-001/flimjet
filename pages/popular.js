import axios from "axios";
import { server } from "../config";
import Collection from "../components/collection";

export default function Home({ movies }) {
  return (
    <div className="bg-gray-500">
      <Collection movieType={"Popular"} movies={movies.results} />
    </div>
  )
}

export async function getStaticProps() {
  const res = await axios(`${server}/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`);
  const movies = res.data;

  return {
    props: { movies }
  }
}

