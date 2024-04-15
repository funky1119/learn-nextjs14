import { Suspense } from "react";
import MovieSimilars from "../../../../components/movie-similars";

interface IParams {
  params: {
    id: string;
  };
}
export default async function MovieSimilar({ params: { id } }: IParams) {
  return (
    <Suspense fallback={<h1>Loading movie similar</h1>}>
      <MovieSimilars id={id} />
    </Suspense>
  );
}
