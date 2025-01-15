import { useState } from "react";
import { useMovies } from "@/hooks/useMovies";
import Loader from "@/components/Loader";
import Button from "@/components/Button";
import MoviesGrid from "@/components/MoviesGrid";
import Search from "@/icons/Search";
import Clear from "@/icons/Clear";
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

const EmptyState = ({ query }: { query: string }) => (
  <div className="flex-grow flex flex-col justify-center items-center">
    <MovieTape className="text-slate-400 dark:text-slate-800 w-40 h-40 mb-5" />
    <span className="text-slate-600 dark:text-slate-300">
      No movies to display {query.length > 0 && `for "${query}"`}
    </span>
  </div>
);

const MoviesContainer = () => {
  const { isLoading, error, movies, query } = useMovies();

  if (isLoading) return <LoadingState />;
  if (error) return <ErrorState message={error} />;
  if (movies.length === 0) return <EmptyState query={query} />;
  return <MoviesGrid />;
};

const Movies = () => {
  const { totalItems, query, setQuery, error } = useMovies();
  const [inputValue, setInputValue] = useState(query);

  function handleSearch() {
    setQuery(inputValue);
  }

  function handleClearSearch() {
    setInputValue("");
    setQuery("");
  }

  return (
    <div className="w-full max-w-screen-2xl mx-auto flex flex-col flex-grow px-4 scrollbar-stable overflow-y-auto">
      {!error && (
        <div className="w-full flex flex-col gap-3 md:flex-row md:justify-between md:items-center mt-4 px-1 text-slate-700 dark:text-slate-300">
          <div className="text-sm">{totalItems} movies found</div>
          <div className="flex items-stretch gap-4">
            <div className="relative w-full max-w-xs">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4">
                <Search />
              </div>
              <input
                type="text"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                placeholder="Search movies..."
                className="w-full py-2 pl-10 pr-5 rounded-lg border border-slate-200 focus:outline-none focus:border-slate-400 bg-white dark:border-slate-800 dark:focus:border-slate-600 dark:bg-slate-800"
                onKeyDown={event => {
                  if (event.key === "Enter") {
                    handleSearch();
                  }
                }}
              />
              <button
                onClick={handleClearSearch}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full p-1 hover:bg-slate-200 dark:hover:bg-slate-600 transition-all duration-300 ease-in-out"
              >
                <Clear />
              </button>
            </div>
            <Button name="Search" onClick={handleSearch} />
          </div>
        </div>
      )}
      <MoviesContainer />
    </div>
  );
};

export default Movies;
