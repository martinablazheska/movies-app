import { useMovies } from "@/hooks/useMovies";
import Pagination from "@/components/MoviesList/Pagination";
import Loader from "@/components/UI/Loader";
import MovieCard from "@/components/MoviesList/MovieCard";
import MovieTape from "@/icons/MovieTape";
import { MovieType } from "@/utils/types";

const LoadingState = () => {
  return (
    <div className="w-full flex flex-grow justify-center px-4 overflow-y-auto">
      <Loader title="Loading movies..." />
    </div>
  );
};

const ErrorState = ({ message }: { message: string }) => (
  <div className="w-full flex flex-col flex-grow justify-center items-center px-4 overflow-y-auto">
    <MovieTape className="text-violet-500 w-40 h-40 mb-5" />
    <span className="text-violet-700">{message}</span>
    <span className="text-slate-600 text-sm">Please try again later</span>
  </div>
);

const EmptyState = () => (
  <div className="w-full flex flex-col flex-grow justify-center items-center px-4 overflow-y-auto">
    <MovieTape className="text-violet-700 w-40 h-40 mb-5" />
    <span className="text-slate-600">No movies to display</span>
  </div>
);

const MoviesGrid = ({
  movies,
  totalItems,
}: {
  movies: MovieType[];
  totalItems: number;
}) => (
  <div className="w-full flex flex-col flex-grow px-4 overflow-y-auto">
    <div className="w-full mt-4 px-1 text-slate-500 text-sm">
      {totalItems} movies found
    </div>
    <div className="w-full grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-6 py-4 mb-12 md:mb-0">
      {movies.map(movie => (
        <MovieCard key={movie.id} title={movie.title} />
      ))}
    </div>
    <Pagination />
  </div>
);

const MoviesList = () => {
  const { movies, isLoading, totalItems, error } = useMovies();

  if (isLoading) return <LoadingState />;
  if (error) return <ErrorState message={error} />;
  if (movies.length === 0) return <EmptyState />;

  return <MoviesGrid movies={movies} totalItems={totalItems} />;
};

export default MoviesList;
