import { Suspense } from "react";
import MovieNavigation from "../../../components/movie-navigation";
import MovieInfo from "../../../components/movie-info";

export default function MovieLayout({
  children,
  params: { id },
}: {
  children: React.ReactNode;
  params: { id: string };
}) {
  return (
    <div>
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <MovieNavigation id={id} />
      {children}
    </div>
  );
}
