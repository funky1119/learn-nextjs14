import Link from "next/link";
import styles from "../../styles/movie-navigation.module.css";

export default function MovieNavigation({ id }: { id: string }) {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href={`/movies/${id}/video`}>비디오</Link>
        </li>
        <li>
          <Link href={`/movies/${id}/credit`}>크레딧</Link>
        </li>
        <li>
          <Link href={`/movies/${id}/provider`}>협력사</Link>
        </li>
        <li>
          <Link href={`/movies/${id}/similar`}>비슷한영화</Link>
        </li>
      </ul>
    </nav>
  );
}
