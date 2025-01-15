import { useMovies } from "@/hooks/useMovies";
import Pagination from "@/components/Main/MoviesGrid/Pagination";
import MovieCard from "@/components/Main/MoviesGrid/MovieCard";
import Search from "@/icons/Search";
import Button from "@/components/UI/Button";

const MoviesGrid = () => {
  const { movies, totalItems } = useMovies();

  return (
    <div className="w-full flex flex-col flex-grow px-4">
      <div className="w-full flex justify-between items-center mt-4 px-1 text-slate-700 dark:text-slate-300 ">
        <div className="text-sm">{totalItems} movies found</div>
        <div className="flex items-stretch gap-4">
          <div className="relative w-full max-w-xs">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4">
              <Search />
            </div>
            <input
              type="text"
              placeholder="Search movies..."
              className="w-full py-2 pl-10 pr-4 rounded-lg border border-slate-200 focus:outline-none focus:border-slate-400 bg-white dark:border-slate-900 dark:focus:border-slate-600 dark:bg-slate-900"
            />
          </div>
          <Button name="Search" onClick={() => {}} />
        </div>
      </div>
      <div className="w-full grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-6 py-4 mb-12 md:mb-0">
        {movies.map(movie => (
          <MovieCard key={movie.id} title={movie.title} />
        ))}
      </div>
      <Pagination />
    </div>
  );
};

export default MoviesGrid;
