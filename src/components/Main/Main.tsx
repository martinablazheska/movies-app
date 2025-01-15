import { useMovies } from "@/hooks/useMovies";
import Loader from "@/components/UI/Loader";
import MoviesGrid from "@/components/Main/MoviesGrid/MoviesGrid";
import MovieTape from "@/icons/MovieTape";

const LoadingState = () => {
  return (
    <div className="w-full flex flex-grow justify-center px-4">
      <Loader title="Loading movies..." />
    </div>
  );
};

const ErrorState = ({ message }: { message: string }) => (
  <div className="w-full flex flex-col flex-grow justify-center items-center px-4">
    <MovieTape className="text-slate-400 dark:text-slate-800 w-40 h-40 mb-5" />
    <span className="text-violet-700 dark:text-violet-500">{message}</span>
    <span className="text-slate-600 dark:text-slate-300">
      Please try again later
    </span>
  </div>
);

const MoviesList = () => {
  const { isLoading, error } = useMovies();

  if (isLoading) return <LoadingState />;
  if (error) return <ErrorState message={error} />;

  return <MoviesGrid />;
};

export default MoviesList;
