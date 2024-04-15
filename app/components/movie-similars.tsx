import { API_URL } from "../../constant";
import styles from "../../styles/movie-simiars.module.css";

const getSimilars = async (id: string) => {
  const response = await fetch(`${API_URL}/${id}/similar`);
  const json = await response.json();
  return json;
};

export default async function MovieSimilars({ id }: { id: string }) {
  const similars = await getSimilars(id);
  return (
    <div className={styles.container}>
      {similars.map((similar) => (
        <div>
          <img src={similar.poster_path} alt={similar.title} />
          <div>{similar.title}</div>
        </div>
      ))}
    </div>
  );
}
