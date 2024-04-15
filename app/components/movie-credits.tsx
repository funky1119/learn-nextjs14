import { API_URL } from "../../constant";
import styles from "../../styles/movie-video.module.css";

const getCredits = async (id: string) => {
  const response = await fetch(`${API_URL}/${id}/credits`);
  const json = await response.json();
  return json;
};

export default async function MovieCredits({ id }: { id: string }) {
  const credits = await getCredits(id);
  return (
    <div className={styles.container}>
      {credits.map((credit) => (
        <div>
          <img src={credit.profile_path} alt={credit.cast_id} />
          <div>{credit.character}</div>
          <div>({credit.name})</div>
        </div>
      ))}
    </div>
  );
}
