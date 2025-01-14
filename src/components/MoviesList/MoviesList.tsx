import { useMovies } from "@/hooks/useMovies";
import Pagination from "@/components/MoviesList/Pagination";
import Loader from "@/components/UI/Loader";
import MovieCard from "@/components/MoviesList/MovieCard";
import MovieTape from "@/icons/MovieTape";

const MoviesList = () => {
  const { movies, isLoading, totalItems } = useMovies();

  return (
    <div className="w-full flex flex-grow justify-center px-4 overflow-y-auto">
      {isLoading ? (
        <Loader title="Loading movies..." />
      ) : (
        <>
          {movies.length > 0 ? (
            <div className="w-full flex flex-col">
              <div className="w-full mt-4 px-1 text-slate-500 text-sm">
                {totalItems} movies found
              </div>
              <div className="w-full grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-3 py-4 ">
                {movies.map(movie => (
                  <MovieCard key={movie.id} title={movie.title} />
                ))}
              </div>
              <Pagination />
            </div>
          ) : (
            <div className="flex flex-col gap-3 justify-center items-center">
              <MovieTape className="text-violet-700" />
              <span className="text-slate-700">No movies to display...</span>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default MoviesList;
