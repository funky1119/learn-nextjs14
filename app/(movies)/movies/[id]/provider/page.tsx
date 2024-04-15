import { Suspense } from "react";
import MovieProviders from "../../../../components/movie-providers";

interface IParams {
  params: {
    id: string;
  };
}
export default async function MovieProvider({ params: { id } }: IParams) {
  return (
    <Suspense fallback={<h1>Loading movie provider</h1>}>
      <MovieProviders id={id} />
    </Suspense>
  );
}
