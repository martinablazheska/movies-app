import { useMovies } from "@/hooks/useMovies";
import Loader from "@/components/Loader";
import MoviesGrid from "@/components/MoviesGrid";
import MovieTape from "@/icons/MovieTape";

const LoadingState = () => (
  <div className="flex-grow flex justify-center items-center">
    <Loader title="Loading movies..." />
  </div>
);

const ErrorState = ({ message }: { message: string }) => (
  <div className="flex-grow flex flex-col justify-center items-center">
    <MovieTape className="text-slate-400 dark:text-slate-800 w-40 h-40 mb-5" />
    <span className="text-violet-700 dark:text-violet-500">{message}</span>
    <span className="text-slate-600 dark:text-slate-300">
      Please try again later
    </span>
  </div>
);

const ResultsArea = () => {
  const { isLoading, error } = useMovies();

  if (isLoading) return <LoadingState />;
  if (error) return <ErrorState message={error} />;
  return null;
};

const Movies = () => {
  return (
    <div className="w-full flex flex-col flex-grow px-4 scrollbar-stable overflow-y-auto">
      <MoviesGrid />
      <ResultsArea />
    </div>
  );
};

export default Movies;
