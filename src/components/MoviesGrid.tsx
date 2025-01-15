import { useState } from "react";
import { useMovies } from "@/hooks/useMovies";
import Pagination from "@/components/Pagination";
import MovieCard from "@/components/MovieCard";
import Button from "@/components/Button";
import Search from "@/icons/Search";
import Clear from "@/icons/Clear";

const MoviesGrid = () => {
  const { movies, totalItems, query, setQuery, isLoading } = useMovies();
  const [inputValue, setInputValue] = useState(query);

  function handleSearch() {
    setQuery(inputValue);
  }

  function handleClearSearch() {
    setInputValue("");
    setQuery("");
  }

  return (
    <>
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

      {!isLoading && movies.length > 0 && (
        <div className="flex-grow flex flex-col justify-between">
          <div className="w-full grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-6 py-4 mb-12 md:mb-0">
            {movies.map(movie => (
              <MovieCard key={movie.id} title={movie.title} />
            ))}
          </div>
          <Pagination />
        </div>
      )}
    </>
  );
};

export default MoviesGrid;
