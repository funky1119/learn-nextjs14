import { Suspense } from "react";
import MovieVideos from "../../../../components/movie-videos";

interface IParams {
  params: {
    id: string;
  };
}
export default async function MovieVideo({ params: { id } }: IParams) {
  return (
    <Suspense fallback={<h1>Loading movie video</h1>}>
      <MovieVideos id={id} />
    </Suspense>
  );
}
