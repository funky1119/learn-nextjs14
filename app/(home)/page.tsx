import Movie from "../components/movie";
import styles from "../../styles/home.module.css";
import { API_URL } from "../../constant";

export const metadata = {
  title: "Home",
};

const getMovies = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(API_URL);
  const json = response.json();
  return json;
};

export default async function HomePage() {
  const movies = await getMovies();
  return (
    <div className={styles.container}>
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          id={movie.id}
          poster_path={movie.poster_path}
          title={movie.title}
        />
      ))}
    </div>
  );
}
