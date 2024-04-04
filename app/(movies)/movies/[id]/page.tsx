import { Suspense } from "react";
import { API_URL } from "../../../(home)/page";
import MovieInfo from "../../../components/movie-info";
import MovieVideos from "../../../components/movie-videos";
// nomad-movies.nomadcoders.workers.dev

export default async function Movies({ params }) {
  const { id } = params;

  return (
    <div>
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading movie video</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
