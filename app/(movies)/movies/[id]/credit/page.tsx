import { Suspense } from "react";
import MovieCredits from "../../../../components/movie-credits";

interface IParams {
  params: {
    id: string;
  };
}
export default async function MovieCredit({ params: { id } }: IParams) {
  return (
    <Suspense fallback={<h1>Loading movie credit</h1>}>
      <MovieCredits id={id} />
    </Suspense>
  );
}
