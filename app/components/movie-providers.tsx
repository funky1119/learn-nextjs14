import { API_URL } from "../../constant";
import styles from "../../styles/movie-video.module.css";

const getProviders = async (id: string) => {
  const response = await fetch(`${API_URL}/${id}/credits`);
  const json = await response.json();
  return json;
};

export default async function MovieProviders({ id }: { id: string }) {
  const providers = await getProviders(id);
  return (
    <div className={styles.container}>
      {providers.map((provider) => (
        <div>
          <img src={provider.profile_path} alt={provider.cast_id} />
          <div>{provider.character}</div>
          <div>({provider.name})</div>
        </div>
      ))}
    </div>
  );
}
